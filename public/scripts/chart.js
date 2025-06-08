const canvas = document.querySelector('#coinPerfChart')
const parent = canvas.parentElement

function resizeCanvas() {
    // Stimmt die Canvas-Auflösung mit der angezeigten Größe ab
    const padding =
        2 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    canvas.width = parent.clientWidth - padding
    canvas.height = parent.clientHeight - padding
}

// Canvas initial und bei Fenstergröße anpassen
resizeCanvas()
window.addEventListener('resize', resizeCanvas)

// 2D-Kontext für das Chart holen
const ctx = canvas.getContext('2d')

// Chart.js Datenstruktur vorbereiten
const data = {
    labels: [],
    datasets: [
        {
            label: 'Random Data',
            data: [],
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(0,0,0,0)',
            prevBackgroundColor: 'rgba(0,0,0,0)',
            fill: true,
            tension: 0,
            pointStyle: false,
        },
    ],
}

// Plugin für runde Linienenden im Chart-Grid
const gridLineCapPlugin = {
    id: 'gridLineCapPlugin',
    beforeDraw(chart) {
        const ctx = chart.ctx
        ctx.save()
        ctx.lineCap = 'round'
    },
    afterDraw(chart) {
        const ctx = chart.ctx
        ctx.restore()
    },
}
Chart.register(gridLineCapPlugin)

// Chart-Konfiguration
Chart.defaults.color = '#ffffff'
Chart.defaults.font = {
    family: "'Inter', sans-serif",
    size: 14,
}

// Chart-Konfiguration (Typ, Optionen, Achsen, Animationen)
const config = {
    type: 'line',
    data: data,
    options: {
        locale: 'de-ch',
        responsive: true,
        plugins: {
            legend: false,
            tooltip: false,
            gridLineCapPlugin: gridLineCapPlugin,
        },
        layout: {
            border: {
                padding: 10,
            },
        },
        datasets: {
            line: {
                borderCapStyle: 'round',
            },
        },
        scales: {
            x: {
                title: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                title: {
                    display: false,
                },
                grid: {
                    color: '#305D81',
                    lineWidth: 2,
                    drawTicks: false,
                },
                border: {
                    display: false,
                    dash: [4, 4],
                },
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 1,
                    padding: 10,
                },
            },
        },
        animation: {
            onComplete: (animation) => {
                coinPerfChart.data.datasets[0].prevBackgroundColor =
                    coinPerfChart.data.datasets[0].borderColor
            },
        },
        animations: {
            bgGradient: {
                properties: ['backgroundColor'],
                type: 'color',
                fn: (from, to, factor) => {
                    return utilGradient(
                        utilInterpolateColor(
                            coinPerfChart.data.datasets[0].prevBackgroundColor,
                            coinPerfChart.data.datasets[0].borderColor,
                            factor
                        )
                    )
                },
            },
        },
    },
}

// Create Chart
const coinPerfChart = new Chart(ctx, config)

// Show  chart for a specific coin
async function displayChartById(id) {
    const data = await loadChart(id)
    if (data === false) {
        return
    }

    // Replace the chart data & labels
    coinPerfChart.data.labels = data.chartLabels
    coinPerfChart.data.datasets[0].data = data.chartData

    // Set color based on performance (green/red)
    if (data.chartData[0] > data.chartData[data.chartData.length - 1]) {
        coinPerfChart.data.datasets[0].borderColor = 'rgba(255,0,0,0.5)'
        coinPerfChart.data.datasets[0].backgroundColor = utilGradient([
            255, 0, 0,
        ])
    } else {
        coinPerfChart.data.datasets[0].borderColor = 'rgba(0,214,24,0.5)'
        coinPerfChart.data.datasets[0].backgroundColor = utilGradient([
            0, 214, 24,
        ])
    }

    // Update Y-Axis dynamically
    const frame = utilFrameData(data.chartData)
    config.options.scales.y.min = frame.lowerBound
    config.options.scales.y.max = frame.upperBound
    config.options.scales.y.ticks.stepSize = frame.adjustedStep

    // Update the chart with new data and configuration
    coinPerfChart.update()
}

// Get Chart-Data from API and prepare
async function loadChart(id) {
    try {
        const url =
            API_BASE_DOMAIN +
            'api/v3/coins/' +
            id +
            '/market_chart?vs_currency=chf&days=7&interval=daily'

        const response = await fetch(url)
        const data = await response.json()

        delete data.prices[data.prices.length - 2]

        // Extract chart data & labels
        const [chartData, chartLabels] = data.prices.reduce(
            ([chartData, chartLabels], prices) => {
                chartData.push(prices[1])

                const date = new Date(prices[0])
                chartLabels.push(
                    `${String(date.getDate()).padStart(2, '0')}.${String(
                        date.getMonth() + 1
                    ).padStart(2, '0')}`
                )
                return [chartData, chartLabels]
            },
            [[], []]
        )

        return {
            chartData,
            chartLabels,
        }
    } catch {
        return false
    }
}

// Vertical gradient
function utilGradient(rgb_color = [0, 0, 0]) {
    const gradient = ctx.createLinearGradient(
        0,
        0,
        0,
        document.getElementById('coinPerfChart').getBoundingClientRect().height
    )
    gradient.addColorStop(0, 'rgba(' + rgb_color.join(',') + ',0.5)')
    gradient.addColorStop(1, 'rgba(' + rgb_color.join(',') + ',0.01)')

    return gradient
}

// Berechnet sinnvolle Y-Achsen-Grenzen und Schrittweite
function utilFrameData(data, marginRatio = 0.02) {
    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min

    // Handle flat data
    if (range === 0) {
        const step = utilNiceStepSize(min || 1)
        const lowerBound = min - 2 * step
        return Array.from(
            { length: 5 },
            (_, i) => +(lowerBound + i * step).toFixed(10)
        )
    }

    // Apply margin
    const paddedMin = min - range * marginRatio
    const paddedMax = max + range * marginRatio

    // Schrittweite berechnen
    const rawStep = (paddedMax - paddedMin) / 4
    const step = utilNiceStepSize(rawStep)

    // Achsen-Grenzen anpassen (important fix!)
    const lowerBound = Math.floor(paddedMin / step) * step
    const upperBound = Math.ceil(paddedMax / step) * step

    // Schrittweite ggf. anpassen
    const adjustedStep = (upperBound - lowerBound) / 4

    return {
        lowerBound,
        upperBound,
        adjustedStep,
    }
}

// Sorgt für "schöne" Schrittweiten auf Y-Achse (1, 2, 2.5, 5, 10, ...)
function utilNiceStepSize(rawStep) {
    const exponent = Math.floor(Math.log10(rawStep))
    const base = Math.pow(10, exponent)
    const fraction = rawStep / base

    let niceFraction
    if (fraction <= 1) {
        niceFraction = 1
    } else if (fraction <= 2) {
        niceFraction = 2
    } else if (fraction <= 2.5) {
        niceFraction = 2.5
    } else if (fraction <= 5) {
        niceFraction = 5
    } else {
        niceFraction = 10
    }

    return niceFraction * base
}

// Interpolates two colors
function utilInterpolateColor(color1, color2, factor = 0.5) {
    const c1 = utilParseColor(color1)
    const c2 = utilParseColor(color2)

    const result = c1.map((v, i) => v + factor * (c2[i] - v))
    return result.splice(0, 3)
}

// Parse color into [r, g, b, a]
function utilParseColor(color = '') {
    let [r, g, b, a = 1] = color
        .replace(/^rgba?\(|\s+|\)$/g, '')
        .split(',')
        .map(Number)

    return [r, g, b, isNaN(a) ? 1 : a]
}
