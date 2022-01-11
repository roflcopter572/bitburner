export async function main(ns) {
  ns.purchaseTor();

	var portBuy = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]
	for (var i = 0; i < portBuy.length; ++i) {
		ns.purchaseProgram(portBuy[i]);
	}

  var backdoorTarget = ["CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", "fulcrumassets", "w0r1d_d43m0n"]
  for (var k = 0; k < backdoorTarget.length; ++k) {
    ns.brutessh(backdoorTarget[k]);
    ns.ftpcrack(backdoorTarget[k]);
    ns.relaysmtp(backdoorTarget[k]);
    ns.httpworm(backdoorTarget[k]);
    ns.sqlinject(backdoorTarget[k]);
    ns.nuke(backdoorTarget[k]);
    // ns.connect(backdoorTarget[k]);
    // await ns.installBackdoor(backdoorTarget[k]);
  }
}
