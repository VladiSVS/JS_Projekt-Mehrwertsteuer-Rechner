
function mehrWertSteuerNetto(nettobBetrag, satz) {
    let steuerResult = nettobBetrag / 100 * satz
    steuerResult = Math.floor(steuerResult * 100) / 100
    document.getElementById("steuerResult").innerHTML = steuerResult + " €"
    document.getElementById("bruttoResult").innerHTML = Number(nettobBetrag + steuerResult) + " €"
}

function mehrWertSteuerBrutto(nettobBetrag, satz) {
    let steuerResult = nettobBetrag / 100 * satz
    steuerResult = Math.floor(steuerResult * 100) / 100
    document.getElementById("steuerResult").innerHTML = steuerResult + " €"
    document.getElementById("bruttoResult").innerHTML = Number(nettobBetrag - steuerResult) + " €"
}

function berechnen() {
    let betrag = Number(document.getElementById("betrag").value)
    let percentHigh = 19
    let percentLow = 7
    if (document.getElementById("netto").checked) {
        document.getElementById("nettoBruttoText").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
        if (document.getElementById("percentHigh").checked) {
            mehrWertSteuerNetto(betrag, percentHigh)
        } else {
            mehrWertSteuerNetto(betrag, percentLow)
        }
    } else {
        document.getElementById("nettoBruttoText").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"
        if (document.getElementById("percentHigh").checked) {
            mehrWertSteuerBrutto(betrag, percentHigh)
        } else {
            mehrWertSteuerBrutto(betrag, percentLow)
        }
    }
}

