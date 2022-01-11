<<<<<<< HEAD
const baseUrl = 'https://raw.githubusercontent.com/roflcopter572/bitburner/master/src/suite/'
const filesToDownload = [
  '/suite/common.js',
  '/suite/mainHack.js',
  '/suite/spider.js',
  '/suite/grow.js',
  '/suite/hack.js',
  '/suite/weaken.js',
  '/suite/playerServers.js',
  '/suite/killAll.js',
  '/suite/runHacking.js',
  '/suite/find.js',
=======
const baseUrl = 'https://raw.githubusercontent.com/roflcopter572/bitburner/master/src/suite'
const filesToDownload = [
  'common.ns',
  'mainHack.ns',
  'spider.ns',
  'grow.ns',
  'hack.ns',
  'weaken.ns',
  'playerServers.ns',
  'killAll.ns',
  'runHacking.ns',
  'find.ns',
>>>>>>> c3bd6deb995bbe542d34a41d7a489dd3543b0fbe
]
const valuesToRemove = ['BB_SERVER_MAP']

function localeHHMMSS(ms = 0) {
  if (!ms) {
    ms = new Date().getTime()
  }

  return new Date(ms).toLocaleTimeString()
}

export async function main(ns) {
<<<<<<< HEAD
  ns.tprint(`[${localeHHMMSS()}] Starting initHacking.js`)
=======
  ns.tprint(`[${localeHHMMSS()}] Starting initHacking.ns`)
>>>>>>> c3bd6deb995bbe542d34a41d7a489dd3543b0fbe

  let hostname = ns.getHostname()

  if (hostname !== 'home') {
    throw new Exception('Run the script from home')
  }

  for (let i = 0; i < filesToDownload.length; i++) {
    const filename = filesToDownload[i]
    const path = baseUrl + filename
    await ns.scriptKill(filename, 'home')
    await ns.rm(filename)
    await ns.sleep(200)
    ns.tprint(`[${localeHHMMSS()}] Trying to download ${path}`)
    await ns.wget(path + '?ts=' + new Date().getTime(), filename)
  }

  valuesToRemove.map((value) => localStorage.removeItem(value))

<<<<<<< HEAD
  ns.tprint(`[${localeHHMMSS()}] Spawning killAll.js`)
  ns.spawn('/suite/killAll.js', 1, '/suite/runHacking.js')
=======
  ns.tprint(`[${localeHHMMSS()}] Spawning killAll.ns`)
  ns.spawn('killAll.ns', 1, 'runHacking.ns')
>>>>>>> c3bd6deb995bbe542d34a41d7a489dd3543b0fbe
}
