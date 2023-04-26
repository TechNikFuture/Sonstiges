Aktuelles_Halbjahr = "1. Halbjahr"






function Buchstabe_a_selected() {    
    stundenplan_neu_laden(Klasse_a_b_c_oder_d = "a")
}
function Buchstabe_b_selected() {    
    stundenplan_neu_laden(Klasse_a_b_c_oder_d = "b")
}
function Buchstabe_c_selected() {    
    stundenplan_neu_laden(Klasse_a_b_c_oder_d = "c")
}
function Buchstabe_d_selected() {    
    stundenplan_neu_laden(Klasse_a_b_c_oder_d = "d")
}








Fremdsprache_ausgewählt = false

function Fremdsprache_Latein_1_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_3").innerHTML = "Latein"
    document.getElementById("4_3").innerHTML = "Pü &nbsp;906"

    document.getElementById("5_6").innerHTML = "Latein"
    document.getElementById("6_6").innerHTML = "Pü &nbsp;906"
}


function Fremdsprache_Latein_2_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_3").innerHTML = "Latein"
    document.getElementById("4_3").innerHTML = "Mey &nbsp;905"

    document.getElementById("5_6").innerHTML = "Latein"
    document.getElementById("6_6").innerHTML = "Mey &nbsp;905"
}


function Fremdsprache_Spanisch_1_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_3").innerHTML = "Spanisch"
    document.getElementById("4_3").innerHTML = "Ki &nbsp;001"

    document.getElementById("5_6").innerHTML = "Spanisch"
    document.getElementById("6_6").innerHTML = "Ki &nbsp;001"
}


function Fremdsprache_Spanisch_2_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_3").innerHTML = "Spanisch"
    document.getElementById("4_3").innerHTML = "Jan &nbsp;128"

    document.getElementById("5_6").innerHTML = "Spanisch"
    document.getElementById("6_6").innerHTML = "Jan &nbsp;128"
}


function Fremdsprache_Französisch_1_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_3").innerHTML = "Französisch"
    document.getElementById("4_3").innerHTML = "Eh &nbsp;207"

    document.getElementById("5_6").innerHTML = "Französisch"
    document.getElementById("6_6").innerHTML = "Eh &nbsp;207"
}









function Bili_1_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_2").innerHTML = "Geschichte Bili"
    document.getElementById("4_2").innerHTML = "Loe &nbsp;905"

    document.getElementById("1_5").innerHTML = "Bio Bili"
    document.getElementById("2_5").innerHTML = "Ht &nbsp;023"
}


function Normal_2_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_2").innerHTML = "Geschichte"
    document.getElementById("4_2").innerHTML = "Swr &nbsp;906"

    document.getElementById("1_5").innerHTML = "Bio"
    document.getElementById("2_5").innerHTML = "Pra &nbsp;027"
}


function Normal_3_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_2").innerHTML = "Bio"
    document.getElementById("4_2").innerHTML = "Lt &nbsp;023"

    document.getElementById("1_5").innerHTML = "Geschichte"
    document.getElementById("2_5").innerHTML = "Pr &nbsp;905"
}


function Normal_4_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_2").innerHTML = "Bio"
    document.getElementById("4_2").innerHTML = "Wa &nbsp;025"

    document.getElementById("1_5").innerHTML = "Geschichte"
    document.getElementById("2_5").innerHTML = "Swr &nbsp;906"
}






function Reli_1_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_4").innerHTML = "Reli"
    document.getElementById("4_4").innerHTML = "Pr &nbsp;905"
}



function Reli_2_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_4").innerHTML = "Reli"
    document.getElementById("4_4").innerHTML = "Tp &nbsp;207"
}



function Reli_3_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_4").innerHTML = "Reli"
    document.getElementById("4_4").innerHTML = "Mkü &nbsp;021"
}



function WN_selected() {
    Fremdsprache_ausgewählt = true
    document.getElementById("3_4").innerHTML = "WN"
    document.getElementById("4_4").innerHTML = "Fs &nbsp;906"
}









//////////////////////////////////////////////////////////////////////////////

Klasse = "9"
Klasse_anzeige = "9"

Klasse_a_b_c_oder_d = "b"


//////////////////////////////////////////////////////////////////////////////


stundenplan_neu_laden()
function stundenplan_neu_laden() {

    stundenplan_überschrift_generieren_und_anzeigen()
    stundenplan_daten_generieren()
    stundenplan_daten_anzeigen()





} // Ende von stundenplan_neu_laden()

    function stundenplan_überschrift_generieren_und_anzeigen() {
    Klasse_und_Buchstabe = Klasse_anzeige + Klasse_a_b_c_oder_d
    console.log(Klasse_und_Buchstabe)



    // Ist nur ein zusätzlicher Filter, sodass keine fehlerhaften Sachen als "Überschrift" über der Tabelle angezeigt werden; Muss also eig. nicht 
    if(
    Klasse_und_Buchstabe.includes("5a") ||
    Klasse_und_Buchstabe.includes("5b") ||
    Klasse_und_Buchstabe.includes("5c") ||
    Klasse_und_Buchstabe.includes("5d") ||
    Klasse_und_Buchstabe.includes("6a") ||
    Klasse_und_Buchstabe.includes("6b") ||
    Klasse_und_Buchstabe.includes("6c") ||
    Klasse_und_Buchstabe.includes("6d") ||
    Klasse_und_Buchstabe.includes("7a") ||
    Klasse_und_Buchstabe.includes("7b") ||
    Klasse_und_Buchstabe.includes("7c") ||
    Klasse_und_Buchstabe.includes("7d") ||
    Klasse_und_Buchstabe.includes("8a") ||
    Klasse_und_Buchstabe.includes("8b") ||
    Klasse_und_Buchstabe.includes("8c") ||
    Klasse_und_Buchstabe.includes("8d") ||
    Klasse_und_Buchstabe.includes("9a") ||
    Klasse_und_Buchstabe.includes("9b") ||
    Klasse_und_Buchstabe.includes("9c") ||
    Klasse_und_Buchstabe.includes("9d") ||
    Klasse_und_Buchstabe.includes("10a") ||
    Klasse_und_Buchstabe.includes("10b") ||
    Klasse_und_Buchstabe.includes("10c") ||
    Klasse_und_Buchstabe.includes("10d") ||
    Klasse_und_Buchstabe.includes("11a") ||
    Klasse_und_Buchstabe.includes("11b") ||
    Klasse_und_Buchstabe.includes("11c") ||
    Klasse_und_Buchstabe.includes("11d") ||
    Klasse_und_Buchstabe.includes("12") ||
    Klasse_und_Buchstabe.includes("12a") ||
    Klasse_und_Buchstabe.includes("12b") ||
    Klasse_und_Buchstabe.includes("12c") ||
    Klasse_und_Buchstabe.includes("12d")
     == true){  
        Stundenplanname = "Stundenplan " + Klasse_und_Buchstabe + " <br> " + Aktuelles_Halbjahr
    } else {

        Stundenplanname = "Stundenplan <br> " + Aktuelles_Halbjahr
    }
    
    //document.getElementById("stundenplanname1").innerHTML = Stundenplanname

    }










    function stundenplan_daten_generieren(){
        
        if (Klasse_a_b_c_oder_d == '' || Klasse == '') {
            return
        } else {
            

if (Klasse_a_b_c_oder_d == "a") {

    Klasse_1 = Klasse + "a"
    Klasse_2 = Klasse + "b" 
    Klasse_2_anfang = quellcode.indexOf(Klasse_2, quellcode.indexOf(Klasse_2, quellcode.indexOf(Klasse_2)+1)+1)

} else if (Klasse_a_b_c_oder_d == "b") {
    
    Klasse_1 = Klasse + "b"
    Klasse_2 = Klasse + "c" 
    Klasse_2_anfang = quellcode.indexOf(Klasse_2, quellcode.indexOf(Klasse_2, quellcode.indexOf(Klasse_2)+1)+1)

} else if (Klasse_a_b_c_oder_d == "c") {

    ////console.log(Klasse)
    Klasse_1 = Klasse + "c"


c_Klasse(Klasse = parseInt(Klasse))
function c_Klasse() {

Klasse_1_anfang = quellcode.indexOf(Klasse_1, quellcode.indexOf(Klasse_1, quellcode.indexOf(Klasse_1)+1)+1)

Klasse_while = Klasse
while (Klasse_while > 0) {
	//console.log(Klasse)
	Klasse_while--



    Klasse_2_anfang = quellcode.indexOf('<table> <thead> <tr> <th>Stunde</th> <th colspan=3>Montag</th> <th colspan=3>Dienstag</th> <th colspan=3>Mittwoch</th>', Klasse_1_anfang +100)

    ////console.log("Speicher: " + Klasse_2_anfang)
}



}



} else if (Klasse_a_b_c_oder_d == "d") {

    ////console.log(Klasse)
    Klasse_1 = Klasse + "d"


d_Klasse()
}
function d_Klasse() {

    Klasse_1_anfang = quellcode.indexOf(Klasse_1, quellcode.indexOf(Klasse_1, quellcode.indexOf(Klasse_1)+1)+1)

    Klasse_while = Klasse
    while (Klasse_while > 0) {
        //console.log(Klasse)
        Klasse_while--
    
    
    
        Klasse_2_anfang = quellcode.indexOf('<table> <thead> <tr> <th>Stunde</th> <th colspan=3>Montag</th> <th colspan=3>Dienstag</th> <th colspan=3>Mittwoch</th>', Klasse_1_anfang +100)
    
    ////console.log("Speicher: " + Klasse_2_anfang)

}


}
    















Klasse_1_anfang = quellcode.indexOf(Klasse_1, quellcode.indexOf(Klasse_1, quellcode.indexOf(Klasse_1)+1)+1)

Klasse_slice = quellcode.slice(Klasse_1_anfang, Klasse_2_anfang)

if (Klasse_1_anfang >= Klasse_2_anfang) {
    ////console.log("1")
if (Klasse_a_b_c_oder_d == "c") {
    c_Klasse(Klasse = parseInt(Klasse) + 5)
} else {
    d_Klasse(Klasse = parseInt(Klasse) + 5)
}
    if (Klasse_1_anfang >= Klasse_2_anfang) {
        ////console.log("2")
        if (Klasse_a_b_c_oder_d == "c") {
            c_Klasse(Klasse = parseInt(Klasse) + 10)
        } else {
            d_Klasse(Klasse = parseInt(Klasse) + 10)
        }
    }
    if (Klasse_1_anfang >= Klasse_2_anfang) {
        ////console.log("3")
        if (Klasse_a_b_c_oder_d == "c") {
            c_Klasse(Klasse = parseInt(Klasse) + 11)
        } else {
            d_Klasse(Klasse = parseInt(Klasse) + 11)
        }
    }
    if (Klasse_1_anfang >= Klasse_2_anfang) {
        ////console.log("4")
        if (Klasse_a_b_c_oder_d == "c") {
            c_Klasse(Klasse = parseInt(Klasse) + 12)
        } else {
            d_Klasse(Klasse = parseInt(Klasse) + 12)
        }
    }

    if (Klasse_1_anfang >= Klasse_2_anfang) {
        ////console.log("6")
        if (Klasse_a_b_c_oder_d == "c") {
            c_Klasse(Klasse = parseInt(Klasse) + 14)
        } else {
            d_Klasse(Klasse = parseInt(Klasse) + 14)
        }
    }
    if (Klasse_1_anfang >= Klasse_2_anfang) {
        ////console.log("7")
        if (Klasse_a_b_c_oder_d == "c") {
            c_Klasse(Klasse = parseInt(Klasse) + 15)
        } else {
            d_Klasse(Klasse = parseInt(Klasse) + 15)
        }
    }
    if (Klasse_1_anfang >= Klasse_2_anfang) {
        ////console.log("8")
        if (Klasse_a_b_c_oder_d == "c") {
            c_Klasse(Klasse = parseInt(Klasse) + 17)
        } else {
            d_Klasse(Klasse = parseInt(Klasse) + 17)
        }
    }
    if (Klasse_1_anfang >= Klasse_2_anfang) {
        ////console.log("9")
        if (Klasse_a_b_c_oder_d == "c") {
            c_Klasse(Klasse = parseInt(Klasse) + 20)
        } else {
            d_Klasse(Klasse = parseInt(Klasse) + 20)
        }
    }
}



////console.log(Klasse_slice)


////console.log("Anfang: " + Klasse_1_anfang)
////console.log("Ende: " + Klasse_2_anfang)










Klasse_erste_stunde_erste_anfang =
Klasse_slice.indexOf('td class=first-col')

Klasse_erste_stunde_zweite_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col'))+1)

Klasse_erste_stunde_dritte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col'))+1)+1)

Klasse_erste_stunde_vierte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col'))+1)+1)+1)

Klasse_erste_stunde_fünfte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col'))+1)+1)+1)+1)

Klasse_erste_stunde_fünfte_ende = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col')+1)+1)+1)+1)+1)



Klasse_erste_stunde_erste = Klasse_slice.slice(Klasse_erste_stunde_erste_anfang, Klasse_erste_stunde_zweite_anfang)
Klasse_erste_stunde_zweite = Klasse_slice.slice(Klasse_erste_stunde_zweite_anfang, Klasse_erste_stunde_dritte_anfang)
Klasse_erste_stunde_dritte = Klasse_slice.slice(Klasse_erste_stunde_dritte_anfang, Klasse_erste_stunde_vierte_anfang)
Klasse_erste_stunde_vierte = Klasse_slice.slice(Klasse_erste_stunde_vierte_anfang, Klasse_erste_stunde_fünfte_anfang -2)
Klasse_erste_stunde_fünfte = Klasse_slice.slice(Klasse_erste_stunde_fünfte_anfang, Klasse_erste_stunde_fünfte_ende)






Klasse_erste_stunde_erste_fach_anfang = Klasse_erste_stunde_erste.indexOf('col')
Klasse_erste_stunde_erste_fach_ende = Klasse_erste_stunde_erste.indexOf('</td> <td>')
Klasse_erste_stunde_erste_fach = Klasse_erste_stunde_erste.slice(Klasse_erste_stunde_erste_fach_anfang + 4, Klasse_erste_stunde_erste_fach_ende)

Klasse_erste_stunde_erste_lehrer_anfang = Klasse_erste_stunde_erste.indexOf('</td> <td>')
Klasse_erste_stunde_erste_lehrer_ende = Klasse_erste_stunde_erste.indexOf('</td> <td class=l')
Klasse_erste_stunde_erste_lehrer = Klasse_erste_stunde_erste.slice(Klasse_erste_stunde_erste_lehrer_anfang +10, Klasse_erste_stunde_erste_lehrer_ende)

Klasse_erste_stunde_erste_raum_anfang = Klasse_erste_stunde_erste.indexOf('last-col>')
Klasse_erste_stunde_erste_raum_ende = Klasse_erste_stunde_erste.lastIndexOf('</td>')
Klasse_erste_stunde_erste_raum = Klasse_erste_stunde_erste.slice(Klasse_erste_stunde_erste_raum_anfang +9, Klasse_erste_stunde_erste_raum_ende)

if (Klasse_erste_stunde_erste_raum.indexOf(' ') !== -1) {
    Leerzeichen_erste_raum_anfang = Klasse_erste_stunde_erste.indexOf(' ')
    Klasse_erste_stunde_erste_raum = Klasse_erste_stunde_erste_raum.slice(Leerzeichen_erste_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_erste_stunde_zweite_fach_anfang = Klasse_erste_stunde_zweite.indexOf('col')
Klasse_erste_stunde_zweite_fach_ende = Klasse_erste_stunde_zweite.indexOf('</td> <td>')
Klasse_erste_stunde_zweite_fach = Klasse_erste_stunde_zweite.slice(Klasse_erste_stunde_zweite_fach_anfang + 4, Klasse_erste_stunde_zweite_fach_ende)

Klasse_erste_stunde_zweite_lehrer_anfang = Klasse_erste_stunde_zweite.indexOf('</td> <td>')
Klasse_erste_stunde_zweite_lehrer_ende = Klasse_erste_stunde_zweite.indexOf('</td> <td class=l')
Klasse_erste_stunde_zweite_lehrer = Klasse_erste_stunde_zweite.slice(Klasse_erste_stunde_zweite_lehrer_anfang +10, Klasse_erste_stunde_zweite_lehrer_ende)

Klasse_erste_stunde_zweite_raum_anfang = Klasse_erste_stunde_zweite.indexOf('last-col>')
Klasse_erste_stunde_zweite_raum_ende = Klasse_erste_stunde_zweite.lastIndexOf('</td>')
Klasse_erste_stunde_zweite_raum = Klasse_erste_stunde_zweite.slice(Klasse_erste_stunde_zweite_raum_anfang +9, Klasse_erste_stunde_zweite_raum_ende)

if (Klasse_erste_stunde_zweite_raum.indexOf(' ') !== -1) {
    Leerzeichen_zweite_raum_anfang = Klasse_erste_stunde_zweite.indexOf(' ')
    Klasse_erste_stunde_zweite_raum = Klasse_erste_stunde_zweite_raum.slice(Leerzeichen_zweite_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_erste_stunde_dritte_fach_anfang = Klasse_erste_stunde_dritte.indexOf('col')
Klasse_erste_stunde_dritte_fach_ende = Klasse_erste_stunde_dritte.indexOf('</td> <td>')
Klasse_erste_stunde_dritte_fach = Klasse_erste_stunde_dritte.slice(Klasse_erste_stunde_dritte_fach_anfang + 4, Klasse_erste_stunde_dritte_fach_ende)

Klasse_erste_stunde_dritte_lehrer_anfang = Klasse_erste_stunde_dritte.indexOf('</td> <td>')
Klasse_erste_stunde_dritte_lehrer_ende = Klasse_erste_stunde_dritte.indexOf('</td> <td class=l')
Klasse_erste_stunde_dritte_lehrer = Klasse_erste_stunde_dritte.slice(Klasse_erste_stunde_dritte_lehrer_anfang +10, Klasse_erste_stunde_dritte_lehrer_ende)

Klasse_erste_stunde_dritte_raum_anfang = Klasse_erste_stunde_dritte.indexOf('last-col>')
Klasse_erste_stunde_dritte_raum_ende = Klasse_erste_stunde_dritte.lastIndexOf('</td>')
Klasse_erste_stunde_dritte_raum = Klasse_erste_stunde_dritte.slice(Klasse_erste_stunde_dritte_raum_anfang +9, Klasse_erste_stunde_dritte_raum_ende)

if (Klasse_erste_stunde_dritte_raum.indexOf(' ') !== -1) {
    Leerzeichen_dritte_raum_anfang = Klasse_erste_stunde_dritte.indexOf(' ')
    Klasse_erste_stunde_dritte_raum = Klasse_erste_stunde_dritte_raum.slice(Leerzeichen_dritte_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_erste_stunde_vierte_fach_anfang = Klasse_erste_stunde_vierte.indexOf('col')
Klasse_erste_stunde_vierte_fach_ende = Klasse_erste_stunde_vierte.indexOf('</td> <td>')
Klasse_erste_stunde_vierte_fach = Klasse_erste_stunde_vierte.slice(Klasse_erste_stunde_vierte_fach_anfang + 4, Klasse_erste_stunde_vierte_fach_ende)

Klasse_erste_stunde_vierte_lehrer_anfang = Klasse_erste_stunde_vierte.indexOf('</td> <td>')
Klasse_erste_stunde_vierte_lehrer_ende = Klasse_erste_stunde_vierte.indexOf('</td> <td class=l')
Klasse_erste_stunde_vierte_lehrer = Klasse_erste_stunde_vierte.slice(Klasse_erste_stunde_vierte_lehrer_anfang +10, Klasse_erste_stunde_vierte_lehrer_ende)

Klasse_erste_stunde_vierte_raum_anfang = Klasse_erste_stunde_vierte.indexOf('last-col>')
Klasse_erste_stunde_vierte_raum_ende = Klasse_erste_stunde_vierte.lastIndexOf('</td>')
Klasse_erste_stunde_vierte_raum = Klasse_erste_stunde_vierte.slice(Klasse_erste_stunde_vierte_raum_anfang +9, Klasse_erste_stunde_vierte_raum_ende)

if (Klasse_erste_stunde_vierte_raum.indexOf(' ') !== -1) {
    Leerzeichen_vierte_raum_anfang = Klasse_erste_stunde_vierte.indexOf(' ')
    Klasse_erste_stunde_vierte_raum = Klasse_erste_stunde_vierte_raum.slice(Leerzeichen_vierte_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_erste_stunde_fünfte_fach_anfang = Klasse_erste_stunde_fünfte.indexOf('col')
Klasse_erste_stunde_fünfte_fach_ende = Klasse_erste_stunde_fünfte.indexOf('</td> <td>')
Klasse_erste_stunde_fünfte_fach = Klasse_erste_stunde_fünfte.slice(Klasse_erste_stunde_fünfte_fach_anfang + 4, Klasse_erste_stunde_fünfte_fach_ende)

Klasse_erste_stunde_fünfte_lehrer_anfang = Klasse_erste_stunde_fünfte.indexOf('</td> <td>')
Klasse_erste_stunde_fünfte_lehrer_ende = Klasse_erste_stunde_fünfte.indexOf('</td> <td class=l')
Klasse_erste_stunde_fünfte_lehrer = Klasse_erste_stunde_fünfte.slice(Klasse_erste_stunde_fünfte_lehrer_anfang +10, Klasse_erste_stunde_fünfte_lehrer_ende)

Klasse_erste_stunde_fünfte_raum_anfang = Klasse_erste_stunde_fünfte.indexOf('last-col>')
Klasse_erste_stunde_fünfte_raum_ende = Klasse_erste_stunde_fünfte.lastIndexOf('</td>')
Klasse_erste_stunde_fünfte_raum = Klasse_erste_stunde_fünfte.slice(Klasse_erste_stunde_fünfte_raum_anfang +9, Klasse_erste_stunde_fünfte_raum_ende)

if (Klasse_erste_stunde_fünfte_raum.indexOf(' ') !== -1) {
    Leerzeichen_fünfte_raum_anfang = Klasse_erste_stunde_fünfte.indexOf(' ')
    Klasse_erste_stunde_fünfte_raum = Klasse_erste_stunde_fünfte_raum.slice(Leerzeichen_fünfte_raum_anfang-2, 9)
}









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






Klasse_zweite_stunde_anfang_Rowspan_anfang = Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('<tbody> <tr class=odd> <td rowspan='+1)+1)+1)+1)+1) +8 // +8 muss, weil ich nur die Zahl brauche, und nicht, das was noch mitgesucht wird
Klasse_zweite_stunde_anfang_Rowspan_ende = Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf(">1</td> <td class=first-col>"+1)+1)+1)+1)+1) +9 // +9 muss, weil ich nur die Zahl brauche, und nicht, das was noch mitgesucht wird

Klasse_zweite_stunde_anfang_Rowspan = Klasse_slice.slice(Klasse_zweite_stunde_anfang_Rowspan_anfang, Klasse_zweite_stunde_anfang_Rowspan_ende)






Klasse_zweite_stunde_erste_anfang =
Klasse_slice.indexOf('<td rowspan=' + Klasse_zweite_stunde_anfang_Rowspan + '>3</td>')

Klasse_zweite_stunde_zweite_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_zweite_stunde_anfang_Rowspan + '>3</td>'))+1)

Klasse_zweite_stunde_dritte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_zweite_stunde_anfang_Rowspan + '>3</td>')))+1)+1)

Klasse_zweite_stunde_vierte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_zweite_stunde_anfang_Rowspan + '>3</td>')))+1)+1)+1)

Klasse_zweite_stunde_fünfte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_zweite_stunde_anfang_Rowspan + '>3</td>')))+1)+1)+1)+1)

Klasse_zweite_stunde_fünfte_ende = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_zweite_stunde_anfang_Rowspan + '>3</td>'))+1)+1)+1)+1)+1)






Klasse_zweite_stunde_erste = Klasse_slice.slice(Klasse_zweite_stunde_erste_anfang, Klasse_zweite_stunde_zweite_anfang)
Klasse_zweite_stunde_zweite = Klasse_slice.slice(Klasse_zweite_stunde_zweite_anfang, Klasse_zweite_stunde_dritte_anfang)
Klasse_zweite_stunde_dritte = Klasse_slice.slice(Klasse_zweite_stunde_dritte_anfang, Klasse_zweite_stunde_vierte_anfang)
Klasse_zweite_stunde_vierte = Klasse_slice.slice(Klasse_zweite_stunde_vierte_anfang, Klasse_zweite_stunde_fünfte_anfang -2)
Klasse_zweite_stunde_fünfte = Klasse_slice.slice(Klasse_zweite_stunde_fünfte_anfang, Klasse_zweite_stunde_fünfte_ende)





Klasse_zweite_stunde_erste_fach_anfang = Klasse_zweite_stunde_erste.indexOf('col')
Klasse_zweite_stunde_erste_fach_ende = Klasse_zweite_stunde_erste.indexOf('</td> <td>')
Klasse_zweite_stunde_erste_fach = Klasse_zweite_stunde_erste.slice(Klasse_zweite_stunde_erste_fach_anfang + 4, Klasse_zweite_stunde_erste_fach_ende)

Klasse_zweite_stunde_erste_lehrer_anfang = Klasse_zweite_stunde_erste.indexOf('</td> <td>')
Klasse_zweite_stunde_erste_lehrer_ende = Klasse_zweite_stunde_erste.indexOf('</td> <td class=l')
Klasse_zweite_stunde_erste_lehrer = Klasse_zweite_stunde_erste.slice(Klasse_zweite_stunde_erste_lehrer_anfang +10, Klasse_zweite_stunde_erste_lehrer_ende)

Klasse_zweite_stunde_erste_raum_anfang = Klasse_zweite_stunde_erste.indexOf('last-col>')
Klasse_zweite_stunde_erste_raum_ende = Klasse_zweite_stunde_erste.lastIndexOf('</td>')
Klasse_zweite_stunde_erste_raum = Klasse_zweite_stunde_erste.slice(Klasse_zweite_stunde_erste_raum_anfang +9, Klasse_zweite_stunde_erste_raum_ende)

if (Klasse_zweite_stunde_erste_raum.indexOf(' ') !== -1) {
    Leerzeichen_erste_raum_anfang = Klasse_zweite_stunde_erste.indexOf(' ')
    Klasse_zweite_stunde_erste_raum = Klasse_zweite_stunde_erste_raum.slice(Leerzeichen_erste_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_zweite_stunde_zweite_fach_anfang = Klasse_zweite_stunde_zweite.indexOf('col')
Klasse_zweite_stunde_zweite_fach_ende = Klasse_zweite_stunde_zweite.indexOf('</td> <td>')
Klasse_zweite_stunde_zweite_fach = Klasse_zweite_stunde_zweite.slice(Klasse_zweite_stunde_zweite_fach_anfang + 4, Klasse_zweite_stunde_zweite_fach_ende)

Klasse_zweite_stunde_zweite_lehrer_anfang = Klasse_zweite_stunde_zweite.indexOf('</td> <td>')
Klasse_zweite_stunde_zweite_lehrer_ende = Klasse_zweite_stunde_zweite.indexOf('</td> <td class=l')
Klasse_zweite_stunde_zweite_lehrer = Klasse_zweite_stunde_zweite.slice(Klasse_zweite_stunde_zweite_lehrer_anfang +10, Klasse_zweite_stunde_zweite_lehrer_ende)

Klasse_zweite_stunde_zweite_raum_anfang = Klasse_zweite_stunde_zweite.indexOf('last-col>')
Klasse_zweite_stunde_zweite_raum_ende = Klasse_zweite_stunde_zweite.lastIndexOf('</td>')
Klasse_zweite_stunde_zweite_raum = Klasse_zweite_stunde_zweite.slice(Klasse_zweite_stunde_zweite_raum_anfang +9, Klasse_zweite_stunde_zweite_raum_ende)

if (Klasse_zweite_stunde_zweite_raum.indexOf(' ') !== -1) {
    Leerzeichen_zweite_raum_anfang = Klasse_zweite_stunde_zweite.indexOf(' ')
    Klasse_zweite_stunde_zweite_raum = Klasse_zweite_stunde_zweite_raum.slice(Leerzeichen_zweite_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_zweite_stunde_dritte_fach_anfang = Klasse_zweite_stunde_dritte.indexOf('col')
Klasse_zweite_stunde_dritte_fach_ende = Klasse_zweite_stunde_dritte.indexOf('</td> <td>')
Klasse_zweite_stunde_dritte_fach = Klasse_zweite_stunde_dritte.slice(Klasse_zweite_stunde_dritte_fach_anfang + 4, Klasse_zweite_stunde_dritte_fach_ende)

Klasse_zweite_stunde_dritte_lehrer_anfang = Klasse_zweite_stunde_dritte.indexOf('</td> <td>')
Klasse_zweite_stunde_dritte_lehrer_ende = Klasse_zweite_stunde_dritte.indexOf('</td> <td class=l')
Klasse_zweite_stunde_dritte_lehrer = Klasse_zweite_stunde_dritte.slice(Klasse_zweite_stunde_dritte_lehrer_anfang +10, Klasse_zweite_stunde_dritte_lehrer_ende)

Klasse_zweite_stunde_dritte_raum_anfang = Klasse_zweite_stunde_dritte.indexOf('last-col>')
Klasse_zweite_stunde_dritte_raum_ende = Klasse_zweite_stunde_dritte.lastIndexOf('</td>')
Klasse_zweite_stunde_dritte_raum = Klasse_zweite_stunde_dritte.slice(Klasse_zweite_stunde_dritte_raum_anfang +9, Klasse_zweite_stunde_dritte_raum_ende)

if (Klasse_zweite_stunde_dritte_raum.indexOf(' ') !== -1) {
    Leerzeichen_dritte_raum_anfang = Klasse_zweite_stunde_dritte.indexOf(' ')
    Klasse_zweite_stunde_dritte_raum = Klasse_zweite_stunde_dritte_raum.slice(Leerzeichen_dritte_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_zweite_stunde_vierte_fach_anfang = Klasse_zweite_stunde_vierte.indexOf('col')
Klasse_zweite_stunde_vierte_fach_ende = Klasse_zweite_stunde_vierte.indexOf('</td> <td>')
Klasse_zweite_stunde_vierte_fach = Klasse_zweite_stunde_vierte.slice(Klasse_zweite_stunde_vierte_fach_anfang + 4, Klasse_zweite_stunde_vierte_fach_ende)

Klasse_zweite_stunde_vierte_lehrer_anfang = Klasse_zweite_stunde_vierte.indexOf('</td> <td>')
Klasse_zweite_stunde_vierte_lehrer_ende = Klasse_zweite_stunde_vierte.indexOf('</td> <td class=l')
Klasse_zweite_stunde_vierte_lehrer = Klasse_zweite_stunde_vierte.slice(Klasse_zweite_stunde_vierte_lehrer_anfang +10, Klasse_zweite_stunde_vierte_lehrer_ende)

Klasse_zweite_stunde_vierte_raum_anfang = Klasse_zweite_stunde_vierte.indexOf('last-col>')
Klasse_zweite_stunde_vierte_raum_ende = Klasse_zweite_stunde_vierte.lastIndexOf('</td>')
Klasse_zweite_stunde_vierte_raum = Klasse_zweite_stunde_vierte.slice(Klasse_zweite_stunde_vierte_raum_anfang +9, Klasse_zweite_stunde_vierte_raum_ende)

if (Klasse_zweite_stunde_vierte_raum.indexOf(' ') !== -1) {
    Leerzeichen_vierte_raum_anfang = Klasse_zweite_stunde_vierte.indexOf(' ')
    Klasse_zweite_stunde_vierte_raum = Klasse_zweite_stunde_vierte_raum.slice(Leerzeichen_vierte_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_zweite_stunde_fünfte_fach_anfang = Klasse_zweite_stunde_fünfte.indexOf('col')
Klasse_zweite_stunde_fünfte_fach_ende = Klasse_zweite_stunde_fünfte.indexOf('</td> <td>')
Klasse_zweite_stunde_fünfte_fach = Klasse_zweite_stunde_fünfte.slice(Klasse_zweite_stunde_fünfte_fach_anfang + 4, Klasse_zweite_stunde_fünfte_fach_ende)

Klasse_zweite_stunde_fünfte_lehrer_anfang = Klasse_zweite_stunde_fünfte.indexOf('</td> <td>')
Klasse_zweite_stunde_fünfte_lehrer_ende = Klasse_zweite_stunde_fünfte.indexOf('</td> <td class=l')
Klasse_zweite_stunde_fünfte_lehrer = Klasse_zweite_stunde_fünfte.slice(Klasse_zweite_stunde_fünfte_lehrer_anfang +10, Klasse_zweite_stunde_fünfte_lehrer_ende)

Klasse_zweite_stunde_fünfte_raum_anfang = Klasse_zweite_stunde_fünfte.indexOf('last-col>')
Klasse_zweite_stunde_fünfte_raum_ende = Klasse_zweite_stunde_fünfte.lastIndexOf('</td>')
Klasse_zweite_stunde_fünfte_raum = Klasse_zweite_stunde_fünfte.slice(Klasse_zweite_stunde_fünfte_raum_anfang +9, Klasse_zweite_stunde_fünfte_raum_ende)

if (Klasse_zweite_stunde_fünfte_raum.indexOf(' ') !== -1) {
    Leerzeichen_fünfte_raum_anfang = Klasse_zweite_stunde_fünfte.indexOf(' ')
    Klasse_zweite_stunde_fünfte_raum = Klasse_zweite_stunde_fünfte_raum.slice(Leerzeichen_fünfte_raum_anfang-2, 9)
}














//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










Klasse_dritte_stunde_anfang_Rowspan_anfang = Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('<tbody> <tr class=odd> <td rowspan='+1)+1)+1)+1)+1)+1)+1) +8 // +8 muss, weil ich nur die Zahl brauche, und nicht, das was noch mitgesucht wird
Klasse_dritte_stunde_anfang_Rowspan_ende = Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf('rowspan=', Klasse_slice.indexOf(">1</td> <td class=first-col>"+1)+1)+1)+1)+1)+1)+1) +9 // +9 muss, weil ich nur die Zahl brauche, und nicht, das was noch mitgesucht wird

Klasse_dritte_stunde_anfang_Rowspan = Klasse_slice.slice(Klasse_dritte_stunde_anfang_Rowspan_anfang, Klasse_dritte_stunde_anfang_Rowspan_ende)








Klasse_dritte_stunde_erste_anfang =
Klasse_slice.indexOf('<td rowspan=' + Klasse_dritte_stunde_anfang_Rowspan + '>5</td>')

Klasse_dritte_stunde_zweite_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_dritte_stunde_anfang_Rowspan + '>5</td>'))+1)

Klasse_dritte_stunde_dritte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_dritte_stunde_anfang_Rowspan + '>5</td>')))+1)+1)

Klasse_dritte_stunde_vierte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_dritte_stunde_anfang_Rowspan + '>5</td>')))+1)+1)+1)

Klasse_dritte_stunde_fünfte_anfang = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_dritte_stunde_anfang_Rowspan + '>5</td>')))+1)+1)+1)+1)

Klasse_dritte_stunde_fünfte_ende = 
Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('td class=first-col', Klasse_slice.indexOf('<td rowspan=' + Klasse_dritte_stunde_anfang_Rowspan + '>5</td>'))+1)+1)+1)+1)+1)



Klasse_dritte_stunde_erste = Klasse_slice.slice(Klasse_dritte_stunde_erste_anfang, Klasse_dritte_stunde_zweite_anfang)
Klasse_dritte_stunde_zweite = Klasse_slice.slice(Klasse_dritte_stunde_zweite_anfang, Klasse_dritte_stunde_dritte_anfang)
Klasse_dritte_stunde_dritte = Klasse_slice.slice(Klasse_dritte_stunde_dritte_anfang, Klasse_dritte_stunde_vierte_anfang)
Klasse_dritte_stunde_vierte = Klasse_slice.slice(Klasse_dritte_stunde_vierte_anfang, Klasse_dritte_stunde_fünfte_anfang -2)
Klasse_dritte_stunde_fünfte = Klasse_slice.slice(Klasse_dritte_stunde_fünfte_anfang, Klasse_dritte_stunde_fünfte_ende)













Klasse_dritte_stunde_erste_fach_anfang = Klasse_dritte_stunde_erste.indexOf('col')
Klasse_dritte_stunde_erste_fach_ende = Klasse_dritte_stunde_erste.indexOf('</td> <td>')
Klasse_dritte_stunde_erste_fach = Klasse_dritte_stunde_erste.slice(Klasse_dritte_stunde_erste_fach_anfang + 4, Klasse_dritte_stunde_erste_fach_ende)

Klasse_dritte_stunde_erste_lehrer_anfang = Klasse_dritte_stunde_erste.indexOf('</td> <td>')
Klasse_dritte_stunde_erste_lehrer_ende = Klasse_dritte_stunde_erste.indexOf('</td> <td class=l')
Klasse_dritte_stunde_erste_lehrer = Klasse_dritte_stunde_erste.slice(Klasse_dritte_stunde_erste_lehrer_anfang +10, Klasse_dritte_stunde_erste_lehrer_ende)

Klasse_dritte_stunde_erste_raum_anfang = Klasse_dritte_stunde_erste.indexOf('last-col>')
Klasse_dritte_stunde_erste_raum_ende = Klasse_dritte_stunde_erste.lastIndexOf('</td>')
Klasse_dritte_stunde_erste_raum = Klasse_dritte_stunde_erste.slice(Klasse_dritte_stunde_erste_raum_anfang +9, Klasse_dritte_stunde_erste_raum_ende)

if (Klasse_dritte_stunde_erste_raum.indexOf(' ') !== -1) {
    Leerzeichen_erste_raum_anfang = Klasse_dritte_stunde_erste.indexOf(' ')
    Klasse_dritte_stunde_erste_raum = Klasse_dritte_stunde_erste_raum.slice(Leerzeichen_erste_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_dritte_stunde_zweite_fach_anfang = Klasse_dritte_stunde_zweite.indexOf('col')
Klasse_dritte_stunde_zweite_fach_ende = Klasse_dritte_stunde_zweite.indexOf('</td> <td>')
Klasse_dritte_stunde_zweite_fach = Klasse_dritte_stunde_zweite.slice(Klasse_dritte_stunde_zweite_fach_anfang + 4, Klasse_dritte_stunde_zweite_fach_ende)

Klasse_dritte_stunde_zweite_lehrer_anfang = Klasse_dritte_stunde_zweite.indexOf('</td> <td>')
Klasse_dritte_stunde_zweite_lehrer_ende = Klasse_dritte_stunde_zweite.indexOf('</td> <td class=l')
Klasse_dritte_stunde_zweite_lehrer = Klasse_dritte_stunde_zweite.slice(Klasse_dritte_stunde_zweite_lehrer_anfang +10, Klasse_dritte_stunde_zweite_lehrer_ende)

Klasse_dritte_stunde_zweite_raum_anfang = Klasse_dritte_stunde_zweite.indexOf('last-col>')
Klasse_dritte_stunde_zweite_raum_ende = Klasse_dritte_stunde_zweite.lastIndexOf('</td>')
Klasse_dritte_stunde_zweite_raum = Klasse_dritte_stunde_zweite.slice(Klasse_dritte_stunde_zweite_raum_anfang +9, Klasse_dritte_stunde_zweite_raum_ende)

if (Klasse_dritte_stunde_zweite_raum.indexOf(' ') !== -1) {
    Leerzeichen_zweite_raum_anfang = Klasse_dritte_stunde_zweite.indexOf(' ')
    Klasse_dritte_stunde_zweite_raum = Klasse_dritte_stunde_zweite_raum.slice(Leerzeichen_zweite_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_dritte_stunde_dritte_fach_anfang = Klasse_dritte_stunde_dritte.indexOf('col')
Klasse_dritte_stunde_dritte_fach_ende = Klasse_dritte_stunde_dritte.indexOf('</td> <td>')
Klasse_dritte_stunde_dritte_fach = Klasse_dritte_stunde_dritte.slice(Klasse_dritte_stunde_dritte_fach_anfang + 4, Klasse_dritte_stunde_dritte_fach_ende)

Klasse_dritte_stunde_dritte_lehrer_anfang = Klasse_dritte_stunde_dritte.indexOf('</td> <td>')
Klasse_dritte_stunde_dritte_lehrer_ende = Klasse_dritte_stunde_dritte.indexOf('</td> <td class=l')
Klasse_dritte_stunde_dritte_lehrer = Klasse_dritte_stunde_dritte.slice(Klasse_dritte_stunde_dritte_lehrer_anfang +10, Klasse_dritte_stunde_dritte_lehrer_ende)

Klasse_dritte_stunde_dritte_raum_anfang = Klasse_dritte_stunde_dritte.indexOf('last-col>')
Klasse_dritte_stunde_dritte_raum_ende = Klasse_dritte_stunde_dritte.lastIndexOf('</td>')
Klasse_dritte_stunde_dritte_raum = Klasse_dritte_stunde_dritte.slice(Klasse_dritte_stunde_dritte_raum_anfang +9, Klasse_dritte_stunde_dritte_raum_ende)

if (Klasse_dritte_stunde_dritte_raum.indexOf(' ') !== -1) {
    Leerzeichen_dritte_raum_anfang = Klasse_dritte_stunde_dritte.indexOf(' ')
    Klasse_dritte_stunde_dritte_raum = Klasse_dritte_stunde_dritte_raum.slice(Leerzeichen_dritte_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_dritte_stunde_vierte_fach_anfang = Klasse_dritte_stunde_vierte.indexOf('col')
Klasse_dritte_stunde_vierte_fach_ende = Klasse_dritte_stunde_vierte.indexOf('</td> <td>')
Klasse_dritte_stunde_vierte_fach = Klasse_dritte_stunde_vierte.slice(Klasse_dritte_stunde_vierte_fach_anfang + 4, Klasse_dritte_stunde_vierte_fach_ende)

Klasse_dritte_stunde_vierte_lehrer_anfang = Klasse_dritte_stunde_vierte.indexOf('</td> <td>')
Klasse_dritte_stunde_vierte_lehrer_ende = Klasse_dritte_stunde_vierte.indexOf('</td> <td class=l')
Klasse_dritte_stunde_vierte_lehrer = Klasse_dritte_stunde_vierte.slice(Klasse_dritte_stunde_vierte_lehrer_anfang +10, Klasse_dritte_stunde_vierte_lehrer_ende)

Klasse_dritte_stunde_vierte_raum_anfang = Klasse_dritte_stunde_vierte.indexOf('last-col>')
Klasse_dritte_stunde_vierte_raum_ende = Klasse_dritte_stunde_vierte.lastIndexOf('</td>')
Klasse_dritte_stunde_vierte_raum = Klasse_dritte_stunde_vierte.slice(Klasse_dritte_stunde_vierte_raum_anfang +9, Klasse_dritte_stunde_vierte_raum_ende)

if (Klasse_dritte_stunde_vierte_raum.indexOf(' ') !== -1) {
    Leerzeichen_vierte_raum_anfang = Klasse_dritte_stunde_vierte.indexOf(' ')
    Klasse_dritte_stunde_vierte_raum = Klasse_dritte_stunde_vierte_raum.slice(Leerzeichen_vierte_raum_anfang-2, 9)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Klasse_dritte_stunde_fünfte_fach_anfang = Klasse_dritte_stunde_fünfte.indexOf('col')
Klasse_dritte_stunde_fünfte_fach_ende = Klasse_dritte_stunde_fünfte.indexOf('</td> <td>')
Klasse_dritte_stunde_fünfte_fach = Klasse_dritte_stunde_fünfte.slice(Klasse_dritte_stunde_fünfte_fach_anfang + 4, Klasse_dritte_stunde_fünfte_fach_ende)

Klasse_dritte_stunde_fünfte_lehrer_anfang = Klasse_dritte_stunde_fünfte.indexOf('</td> <td>')
Klasse_dritte_stunde_fünfte_lehrer_ende = Klasse_dritte_stunde_fünfte.indexOf('</td> <td class=l')
Klasse_dritte_stunde_fünfte_lehrer = Klasse_dritte_stunde_fünfte.slice(Klasse_dritte_stunde_fünfte_lehrer_anfang +10, Klasse_dritte_stunde_fünfte_lehrer_ende)

Klasse_dritte_stunde_fünfte_raum_anfang = Klasse_dritte_stunde_fünfte.indexOf('last-col>')
Klasse_dritte_stunde_fünfte_raum_ende = Klasse_dritte_stunde_fünfte.lastIndexOf('</td>')
Klasse_dritte_stunde_fünfte_raum = Klasse_dritte_stunde_fünfte.slice(Klasse_dritte_stunde_fünfte_raum_anfang +9, Klasse_dritte_stunde_fünfte_raum_ende)

if (Klasse_dritte_stunde_fünfte_raum.indexOf(' ') !== -1) {
    Leerzeichen_fünfte_raum_anfang = Klasse_dritte_stunde_fünfte.indexOf(' ')
    Klasse_dritte_stunde_fünfte_raum = Klasse_dritte_stunde_fünfte_raum.slice(Leerzeichen_fünfte_raum_anfang-2, 9)
}

}












    }
























function stundenplan_daten_anzeigen(){

    if (Klasse_a_b_c_oder_d == '' || Klasse == '') {
        return
    } else {

Klasse_erste_stunde_erste_fach = Klasse_erste_stunde_erste_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")



Klasse_erste_stunde_zweite_fach = Klasse_erste_stunde_zweite_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_erste_stunde_dritte_fach = Klasse_erste_stunde_dritte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_erste_stunde_vierte_fach = Klasse_erste_stunde_vierte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_erste_stunde_fünfte_fach = Klasse_erste_stunde_fünfte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













Klasse_zweite_stunde_erste_fach = Klasse_zweite_stunde_erste_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")



Klasse_zweite_stunde_zweite_fach = Klasse_zweite_stunde_zweite_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_zweite_stunde_dritte_fach = Klasse_zweite_stunde_dritte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_zweite_stunde_vierte_fach = Klasse_zweite_stunde_vierte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_zweite_stunde_fünfte_fach = Klasse_zweite_stunde_fünfte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













Klasse_dritte_stunde_erste_fach = Klasse_dritte_stunde_erste_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")



Klasse_dritte_stunde_zweite_fach = Klasse_dritte_stunde_zweite_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_dritte_stunde_dritte_fach = Klasse_dritte_stunde_dritte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_dritte_stunde_vierte_fach = Klasse_dritte_stunde_vierte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")




Klasse_dritte_stunde_fünfte_fach = Klasse_dritte_stunde_fünfte_fach
.replace('DE', 'Deutsch')
.replace("MA", "Mathe")
.replace("EN", "Englisch")
.replace("SN", "Spanisch")
.replace("LA", "Latein")
.replace("FR", "Französisch")
.replace("KU", "Kunst")
.replace("MU", "Musik")
.replace("SP", "Sport")
.replace("Sportanisch", "Spanisch")
.replace("PO", "Politik")
.replace("Po2", "Politik 2")
.replace("Po3", "Politik 3")
.replace("Po4", "Politik 4")
.replace("BI", "Bio")
.replace("Po1bili", "Politik Bili 1")
.replace("Politik1bili", "Politik Bili 1")
.replace("GE", "Geschichte")
.replace("Ge2", "Geschichte 2")
.replace("Ge1bili", "Geschichte Bili 1")
.replace("Geschichte1bili", "Geschichte Bili 1")
.replace("Bi2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bio2", "Bio 2")
.replace("Bi3", "Bio 3")
.replace("Bi4", "Bio 4")
.replace("Bi1bili", "Bio Bili 1")
.replace("Bio1bili", "Bio Bili 1")
.replace("WN", "Werte und Normen")
.replace("Rel", "Religion")
.replace("EK", "Erdkunde")
.replace("PH", "Physik")
.replace("CH", "Chemie")

























document.getElementById("1_2").innerHTML = Klasse_erste_stunde_erste_fach
document.getElementById("2_2").innerHTML = Klasse_erste_stunde_erste_lehrer + " &nbsp;" + Klasse_erste_stunde_erste_raum
if (Fremdsprache_ausgewählt == true) { } else {

document.getElementById("3_2").innerHTML = Klasse_zweite_stunde_erste_fach
document.getElementById("4_2").innerHTML = Klasse_zweite_stunde_erste_lehrer + " &nbsp;" + Klasse_zweite_stunde_erste_raum
}
document.getElementById("5_2").innerHTML = Klasse_dritte_stunde_erste_fach
document.getElementById("6_2").innerHTML = Klasse_dritte_stunde_erste_lehrer + " &nbsp;" + Klasse_dritte_stunde_erste_raum



document.getElementById("1_3").innerHTML = Klasse_erste_stunde_zweite_fach
document.getElementById("2_3").innerHTML = Klasse_erste_stunde_zweite_lehrer + " &nbsp;" + Klasse_erste_stunde_zweite_raum

if (Fremdsprache_ausgewählt == true) { } else {

    document.getElementById("3_3").innerHTML = Klasse_zweite_stunde_zweite_fach
    document.getElementById("4_3").innerHTML = Klasse_zweite_stunde_zweite_lehrer + " &nbsp;" + Klasse_zweite_stunde_zweite_raum
}


document.getElementById("5_3").innerHTML = Klasse_dritte_stunde_zweite_fach
document.getElementById("6_3").innerHTML = Klasse_dritte_stunde_zweite_lehrer + " &nbsp;" + Klasse_dritte_stunde_zweite_raum




document.getElementById("1_4").innerHTML = Klasse_erste_stunde_dritte_fach
document.getElementById("2_4").innerHTML = Klasse_erste_stunde_dritte_lehrer + " &nbsp;" + Klasse_erste_stunde_dritte_raum

if (Fremdsprache_ausgewählt == true) { } else {
document.getElementById("3_4").innerHTML = Klasse_zweite_stunde_dritte_fach
document.getElementById("4_4").innerHTML = Klasse_zweite_stunde_dritte_lehrer + " &nbsp;" + Klasse_zweite_stunde_dritte_raum

}
document.getElementById("5_4").innerHTML = Klasse_dritte_stunde_dritte_fach
document.getElementById("6_4").innerHTML = Klasse_dritte_stunde_dritte_lehrer + " &nbsp;" + Klasse_dritte_stunde_dritte_raum



if (Fremdsprache_ausgewählt == true) { } else {

document.getElementById("1_5").innerHTML = Klasse_erste_stunde_vierte_fach
document.getElementById("2_5").innerHTML = Klasse_erste_stunde_vierte_lehrer + " &nbsp;" + Klasse_erste_stunde_vierte_raum
}
document.getElementById("3_5").innerHTML = Klasse_zweite_stunde_vierte_fach
document.getElementById("4_5").innerHTML = Klasse_zweite_stunde_vierte_lehrer + " &nbsp;" + Klasse_zweite_stunde_vierte_raum

document.getElementById("5_5").innerHTML = Klasse_dritte_stunde_vierte_fach
document.getElementById("6_5").innerHTML = Klasse_dritte_stunde_vierte_lehrer + " &nbsp;" + Klasse_dritte_stunde_vierte_raum




document.getElementById("1_6").innerHTML = Klasse_erste_stunde_fünfte_fach
document.getElementById("2_6").innerHTML = Klasse_erste_stunde_fünfte_lehrer + " &nbsp;" + Klasse_erste_stunde_fünfte_raum

document.getElementById("3_6").innerHTML = Klasse_zweite_stunde_fünfte_fach
document.getElementById("4_6").innerHTML = Klasse_zweite_stunde_fünfte_lehrer + " &nbsp;" + Klasse_zweite_stunde_fünfte_raum

if (Fremdsprache_ausgewählt == true) { } else {


document.getElementById("5_6").innerHTML = Klasse_dritte_stunde_fünfte_fach
document.getElementById("6_6").innerHTML = Klasse_dritte_stunde_fünfte_lehrer + " &nbsp;" + Klasse_dritte_stunde_fünfte_raum

}












    }


} // Ende von if (Klasse_a_b_c_oder_d !== '') {


    Klasse_a = document.getElementById('select_a');
    Klasse_b = document.getElementById('select_b');
    Klasse_c = document.getElementById('select_c');
    Klasse_d = document.getElementById('Buchstabe_auswahl_d');


/*
    function stundenplan_daten_generieren_test() {
    
        if (Klasse_a_b_c_oder_d == '' || Klasse == '') {
            return
        } else {
        stundenplan_daten_generieren()
        //console.log(Klasse_slice)
        if (Klasse_slice == '') {
            console.log("Klasse_slice ist leer")
            Klasse_d.classList.add('hidden');
        } else {
            Klasse_d.classList.remove('hidden');
        }
        }
    
    }
    

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".Klasse_auswahl");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});




const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".a_b_c_d_auswahl");

const optionsList2 = document.querySelectorAll("#option2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active2");
});

optionsList2.forEach(o2 => {
  o2.addEventListener("click", () => {
    selected2.innerHTML = o2.querySelector('.label2').innerHTML;
    optionsContainer2.classList.remove("active2");
});
});

*/


const selected3 = document.querySelector(".selected3");
const optionsContainer3 = document.querySelector(".Fremdsprache_auswahl");

const optionsList3 = document.querySelectorAll(".option3");

selected3.addEventListener("click", () => {
  optionsContainer3.classList.toggle("active3");
});

optionsList3.forEach(o3 => {
  o3.addEventListener("click", () => {
    selected3.innerHTML = o3.querySelector('.label3').innerHTML;
    optionsContainer3.classList.remove("active3");
});
});




const selected4 = document.querySelector(".selected4");
const optionsContainer4 = document.querySelector(".Bili_Kurse_auswahl");

const optionsList4 = document.querySelectorAll(".option4");

selected4.addEventListener("click", () => {
  optionsContainer4.classList.toggle("active4");
});

optionsList4.forEach(o4 => {
  o4.addEventListener("click", () => {
    selected4.innerHTML = o4.querySelector('.label4').innerHTML;
    optionsContainer4.classList.remove("active4");
});
});






const selected5 = document.querySelector(".selected5");
const optionsContainer5 = document.querySelector(".Reli_Kurse_auswahl");

const optionsList5 = document.querySelectorAll(".option5");

selected5.addEventListener("click", () => {
  optionsContainer5.classList.toggle("active5");
});

optionsList5.forEach(o5 => {
  o5.addEventListener("click", () => {
    selected5.innerHTML = o5.querySelector('.label5').innerHTML;
    optionsContainer5.classList.remove("active5");
});
});









