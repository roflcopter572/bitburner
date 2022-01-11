export async function main(ns) {
  if (ns.getHostname() !== "home") {
    throw new Exception("Run the script from home");
  }

  await ns.wget(
    `https://raw.githubusercontent.com/roflcopter572/bitburner/master/src/suite/initHacking.js?ts=${new Date().getTime()}`,
    "/suite/initHacking.js"
  );
  ns.spawn("/suite/initHacking.js", 1);
}
