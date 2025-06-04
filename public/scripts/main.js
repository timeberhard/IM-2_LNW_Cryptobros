const coins = [
    {
        id: 'bitcoin',
        name: 'Bitcoin',
        ticker: 'btc',
        color: '#F7931A',
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M35.4605 22.3564C33.0571 32.0014 23.2889 37.8664 13.6438 35.4604C4.00313 33.0754 -1.86887 23.2879 0.540539 13.658C2.94095 4.00555 12.7121 -1.86392 22.3512 0.537571C31.9979 2.94506 37.8669 12.71 35.4605 22.3594V22.3564ZM25.9338 15.437C26.2939 13.052 24.4726 11.762 21.9732 10.892L22.7833 7.66253L20.8105 7.16753L20.0228 10.328C19.5053 10.1975 18.9652 10.0775 18.4266 9.95302L19.2157 6.76254L17.2354 6.26754L16.4252 9.51502C15.9977 9.41452 15.5776 9.31702 15.165 9.21502L12.4421 8.54002L11.917 10.6505C11.917 10.6505 13.3797 10.988 13.3497 11.0045C14.1523 11.2085 14.2949 11.7335 14.2724 12.1535L12.0565 21.0335C11.944 21.2825 11.6964 21.6425 11.1353 21.5045C11.1578 21.5345 9.69509 21.1445 9.69509 21.1445L8.70492 23.4094L11.2704 24.0484L12.6656 24.4114L11.8555 27.6964L13.8358 28.1869L14.6459 24.9319C15.186 25.0819 15.7036 25.2169 16.2212 25.3414L15.4561 28.5724L17.4364 29.0674L18.254 25.7824C21.6146 26.4229 24.15 26.1679 25.2152 23.1214C26.0704 20.666 25.1702 19.2515 23.3894 18.3275C24.6706 18.038 25.6398 17.1875 25.9098 15.4325H25.9248L25.9338 15.437ZM21.4181 21.767C20.812 24.2269 16.6818 22.8919 15.3421 22.5619L16.4222 18.212C17.7665 18.557 22.0587 19.217 21.4181 21.767ZM22.0332 15.407C21.4781 17.642 18.0395 16.5095 16.9248 16.232L17.906 12.272C19.0222 12.542 22.6123 13.058 22.0317 15.398L22.0332 15.407Z" fill="currentColor"/>
      </svg>
    `,
    },
    {
        id: 'ethereum',
        name: 'Ethereum',
        ticker: 'eth',
        color: '#627EEA',
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40" fill="none">
        <path d="M12.9066 29.95L0.633301 22.7L12.905 40L25.1883 22.7L12.9016 29.95H12.9066ZM13.0933 0L0.816634 20.3717L13.0916 27.6283L25.3666 20.3783L13.0933 0Z" fill="currentColor"/>
      </svg>
    `,
    },
    {
        id: 'tether',
        name: 'Tether',
        ticker: 'usdt',
        color: '#50AF95',
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32" fill="none">
        <path d="M29.6935 13.7279C29.6935 14.686 26.1502 15.4879 21.3999 15.6916L21.4043 15.6927C21.27 15.7025 20.5758 15.7425 19.0274 15.7425C17.7959 15.7425 16.9216 15.7068 16.6149 15.6927C11.8555 15.49 8.30317 14.688 8.30317 13.7279C8.30317 12.7678 11.8555 11.9668 16.6149 11.7608V14.894C16.926 14.9157 17.8173 14.9666 19.0488 14.9666C20.5267 14.9666 21.2667 14.907 21.3999 14.8952V11.763C26.1489 11.9679 29.6935 12.77 29.6935 13.7279ZM37.911 14.5657L19.1976 31.9231C19.1445 31.9725 19.0737 32 19 32C18.9264 32 18.8556 31.9725 18.8024 31.9231L0.089 14.5646C0.0450887 14.5247 0.0155269 14.4722 0.00464323 14.4149C-0.00624048 14.3576 0.00212566 14.2983 0.0285166 14.2459L6.9575 0.157275C6.98015 0.109802 7.01651 0.0696905 7.0622 0.0417855C7.10788 0.0138805 7.16093 -0.000624951 7.21495 2.06491e-05H30.7873C30.841 -0.000111023 30.8937 0.0147336 30.9389 0.0427817C30.9842 0.0708297 31.0202 0.110896 31.0425 0.158195L37.9715 14.247C37.9979 14.2994 38.0062 14.3586 37.9954 14.416C37.9845 14.4733 37.9549 14.5257 37.911 14.5657ZM30.8209 13.9468C30.8209 12.7102 26.781 11.6785 21.4043 11.4379V8.63537H28.0321V4.35992H9.98705V8.63537H16.6136V11.438C11.2274 11.6775 7.17679 12.7102 7.17679 13.948C7.17679 15.1856 11.2274 16.2173 16.6136 16.4579V25.4423H21.4032V16.4547C26.777 16.2151 30.8209 15.1833 30.8209 13.9468Z" fill="currentColor"/>
      </svg>
    `,
    },
    {
        id: 'ripple',
        name: 'XRP',
        ticker: 'xrp',
        color: '#25A768',
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" viewBox="0 0 40 31" fill="none">
        <path d="M9.2 0.00166655C8.42838 0.0010086 7.6642 0.152533 6.95121 0.447567C6.23822 0.742601 5.59041 1.17535 5.04487 1.72105C4.49933 2.26675 4.06676 2.91467 3.77193 3.62775C3.4771 4.34082 3.32579 5.10504 3.32667 5.87667V10.14C3.32779 11.0421 2.98384 11.9104 2.36531 12.5671C1.74679 13.2237 0.900535 13.6189 0 13.6717L0.05 14.6083L0 15.5433C0.901111 15.5961 1.74785 15.9918 2.36646 16.6491C2.98507 17.3065 3.32864 18.1757 3.32667 19.0783V23.9917C3.32401 25.6216 3.9685 27.1859 5.11853 28.341C6.26856 29.496 7.83007 30.1473 9.46 30.1517V28.28C8.32985 28.2787 7.2464 27.829 6.44742 27.0297C5.64844 26.2304 5.19922 25.1468 5.19833 24.0167V19.0783C5.19888 18.1966 4.98346 17.3282 4.5709 16.549C4.15833 15.7698 3.56119 15.1035 2.83167 14.6083C3.55904 14.111 4.15455 13.4442 4.56685 12.6655C4.97915 11.8868 5.19587 11.0195 5.19833 10.1383V5.87667C5.20272 4.81656 5.62568 3.80109 6.37514 3.05131C7.1246 2.30154 8.13989 1.87816 9.2 1.87333H9.92833V0.00166655H9.2ZM30.0967 0.00166655V1.87333H30.825C31.3491 1.87421 31.8678 1.97849 32.3516 2.18021C32.8353 2.38193 33.2744 2.67712 33.6438 3.04886C34.0133 3.4206 34.3057 3.86159 34.5044 4.34655C34.703 4.83152 34.8041 5.35092 34.8017 5.875V10.1383C34.8041 11.0195 35.0209 11.8868 35.4332 12.6655C35.8455 13.4442 36.441 14.111 37.1683 14.6083C36.4388 15.1035 35.8417 15.7698 35.4291 16.549C35.0165 17.3282 34.8011 18.1966 34.8017 19.0783V24.0167C34.8008 25.1468 34.3516 26.2304 33.5526 27.0297C32.7536 27.829 31.6701 28.2787 30.54 28.28V30.1517C32.1699 30.1473 33.7314 29.496 34.8815 28.341C36.0315 27.1859 36.676 25.6216 36.6733 23.9917V19.0767C36.6722 18.1746 37.0162 17.3062 37.6347 16.6496C38.2532 15.993 39.0995 15.5978 40 15.545L39.95 14.6083L40 13.6733C39.0992 13.6206 38.2527 13.2251 37.6341 12.5681C37.0155 11.9111 36.6718 11.0424 36.6733 10.14V5.87333C36.676 4.31914 36.0615 2.82748 34.9648 1.72616C33.8682 0.624843 32.3792 0.00397377 30.825 0L30.0967 0.00166655ZM10.4217 7.54L16.2183 12.9717C17.2581 13.9125 18.6103 14.4334 20.0125 14.4334C21.4147 14.4334 22.7669 13.9125 23.8067 12.9717L29.6033 7.53833H26.8217L22.405 11.645C21.749 12.2476 20.8907 12.582 20 12.582C19.1093 12.582 18.251 12.2476 17.595 11.645L13.2033 7.54H10.4217ZM19.765 15.68C18.4456 15.7386 17.1894 16.2616 16.2183 17.1567L10.3967 22.6133H13.1767L17.6217 18.455C18.2775 17.8529 19.1355 17.5188 20.0258 17.5188C20.9162 17.5188 21.7741 17.8529 22.43 18.455L26.8467 22.6133H29.63L23.8067 17.1567C23.2636 16.6562 22.627 16.2681 21.9333 16.0146C21.2397 15.7612 20.5028 15.6475 19.765 15.68Z" fill="currentColor"/>
      </svg>
    `,
    },
    {
        id: 'binancecoin',
        name: 'BNB',
        ticker: 'bnb',
        color: '#F0B90B',
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
        <path d="M7.385 6.12667L18.0017 0L28.6133 6.12667L24.7133 8.39L18 4.52667L11.2867 8.39L7.385 6.12667ZM28.6133 13.8533L24.7133 11.59L18 15.4533L11.2867 11.59L7.38667 13.8533V18.38L14.0967 22.2433V29.97L18 32.235L21.9017 29.97V22.2433L28.6133 18.38V13.8533ZM28.6133 26.1067V21.58L24.7133 23.8433V28.37L28.6133 26.1067ZM31.385 27.7067L24.6733 31.57V36.0983L35.2867 29.97V17.7167L31.3867 19.98L31.385 27.7067ZM27.485 9.99L31.385 12.2533V16.78L35.2867 14.5167V9.99L31.3867 7.72667L27.485 9.99ZM14.095 33.21V37.7367L18 40L21.9017 37.7367V33.21L18.0017 35.4733L14.0967 33.21H14.095ZM7.38334 26.1067L11.285 28.37V23.8433L7.385 21.58L7.38334 26.1067ZM14.095 9.99L18 12.2533L21.9017 9.99L18.0017 7.72667L14.0967 9.99H14.095ZM4.61167 12.2533L8.51667 9.99L4.61334 7.72667L0.713337 9.99V14.5167L4.61334 16.78L4.61167 12.2533ZM4.61167 19.98L0.71167 17.7167V29.97L11.325 36.0983V31.57L4.61167 27.7067V19.98Z" fill="currentColor"/>
      </svg>
    `,
    },
]

const defaultCoin = 'bitcoin'

function init() {
    initCoinButtons()

    displayCoinById(defaultCoin)
    displayChartById(defaultCoin)
}

function initCoinButtons() {
    const coinsButtonContainer = document.querySelector('.app_coinsButton')

    coins.forEach((coin) => {
        const coinButton = document.createElement('button')
        coinButton.setAttribute('id', coin.id)
        coinButton.setAttribute('title', coin.name)
        coinButton.setAttribute('style', '--theme: ' + coin.color)
        if (defaultCoin === coin.id) coinButton.classList.add('active')
        coinButton.innerHTML = coin.icon

        coinButton.addEventListener('click', async () => {
            document
                .querySelector('.app_coinsButton button.active')
                .classList.remove('active')
            document
                .querySelector('.app_coinsButton button#' + coinButton.id)
                .classList.add('active')
            await Promise.all([
                displayCoinById(coinButton.id),
                displayChartById(coinButton.id),
            ])
        })
        coinsButtonContainer.appendChild(coinButton)
    })
}

async function displayCoinById(id) {
    const data = await loadCoin(id)
    if (data === false) {
        return
    }

    document.querySelector('.app_coinInfo_title h1').textContent = data.name
    document.querySelector('.app_coinInfo_title_meta_ticker').textContent =
        '$' + data.ticker.toUpperCase()
    document.querySelector('.app_coinInfo_title_meta_update').textContent =
        data.lastUpdate

    document.querySelector('.app_coinInfo_market h2').textContent =
        'CHF ' + data.price.toLocaleString('de-ch')

    if (data.priceChange24h >= 0) {
        document.querySelector('#coinPerf24h').classList.add('positive')
        document.querySelector('#coinPerf24h').classList.remove('negative')
    }
    if (data.priceChange24h < 0) {
        document.querySelector('#coinPerf24h').classList.add('negative')
        document.querySelector('#coinPerf24h').classList.remove('positive')
    }
    document.querySelector('#coinPerf24h span').textContent =
        data.priceChange24h.toFixed(2) + '%'

    if (data.priceChange7d >= 0) {
        document.querySelector('#coinPerf7d').classList.add('positive')
        document.querySelector('#coinPerf7d').classList.remove('negative')
    }
    if (data.priceChange7d < 0) {
        document.querySelector('#coinPerf7d').classList.add('negative')
        document.querySelector('#coinPerf7d').classList.remove('positive')
    }
    document.querySelector('#coinPerf7d span').textContent =
        data.priceChange7d.toFixed(2) + '%'
}

function formatTimeAgo(dateString) {
    const date = new Date(dateString)
    const now = new Date()
    const diff = Math.floor((now - date) / 1000) // difference in seconds

    if (diff < 60) return `Updated ${diff}s ago`
    if (diff < 3600) return `Updated ${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `Updated ${Math.floor(diff / 3600)}h ago`
    if (diff < 2592000) return `Updated ${Math.floor(diff / 86400)}d ago`
    if (diff < 31536000) return `Updated ${Math.floor(diff / 2592000)}mo ago`
    return `Updated ${Math.floor(diff / 31536000)}y ago`
}

async function loadCoin(id) {
    const url = 'https://api.coingecko.com/api/v3/coins/' + id
    try {
        // load data from api
        const response = await fetch(url)
        const data = await response.json()

        // prepare data from api
        return {
            name: data.name,
            ticker: data.symbol,
            price: data.market_data.current_price.chf,
            priceChange24h: data.market_data.price_change_percentage_24h,
            priceChange7d: data.market_data.price_change_percentage_7d,
            lastUpdate: formatTimeAgo(data.last_updated),
        }
    } catch (error) {
        // return false on error
        return false
    }
}

init()
