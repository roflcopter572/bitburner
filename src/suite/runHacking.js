function localeHHMMSS(ms = 0) {
  if (!ms) {
    ms = new Date().getTime()
  }

  return new Date(ms).toLocaleTimeString()
}

export async function main(ns) {
  ns.tprint(`[${localeHHMMSS()}] Starting /suite/runHacking.js`)

  let hostname = ns.getHostname()

  if (hostname !== 'home') {
    throw new Exception('Run the script from home')
  }

  const homeRam = ns.getServerRam('home').shift()

  if (homeRam >= 32) {
    ns.tprint(`[${localeHHMMSS()}] Spawning /suite/spider.js`)
    await ns.run('/suite/spider.js', 1, '/suite/mainHack.js')
    await ns.sleep(3000)
    ns.tprint(`[${localeHHMMSS()}] Spawning /suite/playerServers.js`)
    ns.spawn('/suite/playerServers.js', 1)
  } else {
    ns.tprint(`[${localeHHMMSS()}] Spawning /suite/spider.js`)
    ns.spawn('/suite/spider.js', 1, '/suite/mainHack.js')
  }
}
