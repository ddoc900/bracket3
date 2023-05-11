const generate = document.getElementById('generate')

// south global tags //
const sr2g1 = document.getElementById('sr2g1');
const sr2g2 = document.getElementById('sr2g2');
const sr2g3 = document.getElementById('sr2g3');
const sr2g4 = document.getElementById('sr2g4');
const sr2g5 = document.getElementById('sr2g5');
const sr2g6 = document.getElementById('sr2g6');
const sr2g7 = document.getElementById('sr2g7');
const sr2g8 = document.getElementById('sr2g8');
const sr3g1 = document.getElementById('sr3g1');
const sr3g2 = document.getElementById('sr3g2');
const sr3g3 = document.getElementById('sr3g3');
const sr3g4 = document.getElementById('sr3g4');
const sr4g1 = document.getElementById('sr4g1');
const sr4g2 = document.getElementById('sr4g2');
const sr5 = document.getElementById('sr5');

// east tags //

const er2g1 = document.getElementById('er2g1');
const er2g2 = document.getElementById('er2g2');
const er2g3 = document.getElementById('er2g3');
const er2g4 = document.getElementById('er2g4');
const er2g5 = document.getElementById('er2g5');
const er2g6 = document.getElementById('er2g6');
const er2g7 = document.getElementById('er2g7');
const er2g8 = document.getElementById('er2g8');
const er3g1 = document.getElementById('er3g1');
const er3g2 = document.getElementById('er3g2');
const er3g3 = document.getElementById('er3g3');
const er3g4 = document.getElementById('er3g4');
const er4g1 = document.getElementById('er4g1');
const er4g2 = document.getElementById('er4g2');
const er5 = document.getElementById('er5');

// midwest tags //

const mr2g1 = document.getElementById('mr2g1');
const mr2g2 = document.getElementById('mr2g2');
const mr2g3 = document.getElementById('mr2g3');
const mr2g4 = document.getElementById('mr2g4');
const mr2g5 = document.getElementById('mr2g5');
const mr2g6 = document.getElementById('mr2g6');
const mr2g7 = document.getElementById('mr2g7');
const mr2g8 = document.getElementById('mr2g8');
const mr3g1 = document.getElementById('mr3g1');
const mr3g2 = document.getElementById('mr3g2');
const mr3g3 = document.getElementById('mr3g3');
const mr3g4 = document.getElementById('mr3g4');
const mr4g1 = document.getElementById('mr4g1');
const mr4g2 = document.getElementById('mr4g2');
const mr5 = document.getElementById('mr5');


// west tags //

const wr2g1 = document.getElementById('wr2g1');
const wr2g2 = document.getElementById('wr2g2');
const wr2g3 = document.getElementById('wr2g3');
const wr2g4 = document.getElementById('wr2g4');
const wr2g5 = document.getElementById('wr2g5');
const wr2g6 = document.getElementById('wr2g6');
const wr2g7 = document.getElementById('wr2g7');
const wr2g8 = document.getElementById('wr2g8');
const wr3g1 = document.getElementById('wr3g1');
const wr3g2 = document.getElementById('wr3g2');
const wr3g3 = document.getElementById('wr3g3');
const wr3g4 = document.getElementById('wr3g4');
const wr4g1 = document.getElementById('wr4g1');
const wr4g2 = document.getElementById('wr4g2');
const wr5 = document.getElementById('wr5');








// function to find winners in south division //










const findWinnerSouth = (x, y, z) => {
    
    switch (x) {
        case 'Alabama': x = 1;
        break;
        case 'Texas': x = 16;
        break;
        case 'West Virgina':  x = 9;
        break;
        case 'Maryland':  x = 8;
        break;
        case 'San Diego': x = 5;
        break;
        case 'Charleston': x = 12;
        break;
        case 'Virgina': x= 4;
        break;
        case 'Furman': x= 13;
        break;
        case 'Creighton': x= 6;
        break;
        case 'NC State': x= 11;
        break;
        case 'Baylor': x= 3;
        break;
        case 'UCSB': x= 14;
        break;
        case 'Missouri': x= 7;
        break;
        case 'Utah St.': x= 10;
        break;
        case 'Arizona': x=2;
        break;
        case 'Princton': x=15

    }
    
    
    switch (y) {
        case 'Alabama': y = 1;
        break;
        case 'Texas': y = 16;
        break;
        case 'West Virgina':  y = 9;
        break;
        case 'Maryland':  y = 8;
        break;
        case 'San Diego': y = 5;
        break;
        case 'Charleston': y = 12;
        break;
        case 'Virgina': y= 4;
        break;
        case 'Furman': y= 13;
        break;
        case 'Creighton': y= 6;
        break;
        case 'NC State': y= 11;
        break;
        case 'Baylor': y= 3;
        break;
        case 'UCSB': y= 14;
        break;
        case 'Missouri': y= 7;
        break;
        case 'Utah St.': y= 10;
        break;
        case 'Arizona': y=2;
        break;
        case 'Princton': y=15
    }
   
    
    
    let diceRoll = Math.floor(Math.random() *101);
    let chanceOfWinning = Math.floor((x / (x + y)) *100)
    console.log(diceRoll);
    console.log(chanceOfWinning);
    if (chanceOfWinning <= diceRoll){
        
        switch (x) {
            case 1: z.innerHTML = 'Alabama';
            break;
            case 16: z.innerHTML = 'Texas';
            break;
            case 9: z.innerHTML = 'West Virgina';
            break;
            case 8: z.innerHTML = 'Maryland';
            break;
            case 5: z.innerHTML = 'San Diego';
            break;
            case 12: z.innerHTML= 'Charleston';
            break;
            case 4: z.innerHTML=  'Virgina';
            break;
            case 13: z.innerHTML=  'Furman';
            break;
            case 6: z.innerHTML=  'Creighton';
            break;
            case 11: z.innerHTML=  'NC State';
            break;
            case 3: z.innerHTML=  'Baylor';
            break;
            case 14: z.innerHTML=  'UCSB';
            break;
            case 7: z.innerHTML=  'Missouri';
            break;
            case 10: z.innerHTML=  'Utah St.';
            break;
            case 2: z.innerHTML=  'Arizona';
            break;
            case 15: z.innerHTML=  'Princton';
        }
       

    } else {
        
        switch (y) {
            case 1: z.innerHTML = 'Alabama';
            break;
            case 16: z.innerHTML = 'Texas';
            break;
            case 9: z.innerHTML = 'West Virgina';
            break;
            case 8: z.innerHTML = 'Maryland';
            break;
            case 5: z.innerHTML = 'San Diego';
            break;
            case 12: z.innerHTML= 'Charleston';
            break;
            case 4: z.innerHTML=  'Virgina';
            break;
            case 13: z.innerHTML=  'Furman';
            break;
            case 6: z.innerHTML=  'Creighton';
            break;
            case 11: z.innerHTML=  'NC State';
            break;
            case 3: z.innerHTML=  'Baylor';
            break;
            case 14: z.innerHTML=  'UCSB';
            break;
            case 7: z.innerHTML=  'Missouri';
            break;
            case 10: z.innerHTML=  'Utah St.';
            break;
            case 2: z.innerHTML=  'Arizona';
            break;
            case 15: z.innerHTML=  'Princton';
        }
}}










// function to find the winners in east division //










const findWinnerEast = (x, y, z) => {
    
    switch (x) {
        case 'Purdue': x = 1;
        break;
        case 'FDU': x = 16;
        break;
        case 'Memphis':  x = 9;
        break;
        case 'FAU':  x = 8;
        break;
        case 'Duke': x = 5;
        break;
        case 'Oral Roberts': x = 12;
        break;
        case 'Tennessee': x= 4;
        break;
        case 'Louisiana': x= 13;
        break;
        case 'Kentuckey': x= 6;
        break;
        case 'providance': x= 11;
        break;
        case 'Kansas St.': x= 3;
        break;
        case 'Montana St.': x= 14;
        break;
        case 'Michigan St.': x= 7;
        break;
        case 'USC': x= 10;
        break;
        case 'Marquette': x=2;
        break;
        case 'Vermont': x=15

    }
    
    
    switch (y) {
        case 'Purdue': y = 1;
        break;
        case 'FDU': y = 16;
        break;
        case 'Memphis':  y = 9;
        break;
        case 'FAU':  y = 8;
        break;
        case 'Duke': y = 5;
        break;
        case 'Oral Roberts': y = 12;
        break;
        case 'Tennessee': y= 4;
        break;
        case 'Louisiana': y= 13;
        break;
        case 'Kentuckey': y = 6;
        break;
        case 'Providance': y = 11;
        break;
        case 'Kansas St.': y= 3;
        break;
        case 'Montana St.': y= 14;
        break;
        case 'Michigan St.': y= 7;
        break;
        case 'USC': y= 10;
        break;
        case 'Marquette': y=2;
        break;
        case 'Vermont': y=15
    }
   
    
    
    let diceRoll = Math.floor(Math.random() *101);
    let chanceOfWinning = Math.floor((x / (x + y)) *100)
    console.log(diceRoll);
    console.log(chanceOfWinning);
    if (chanceOfWinning <= diceRoll){
        
        switch (x) {
            case 1: z.innerHTML = 'Purdue';
            break;
            case 16: z.innerHTML = 'FDU';
            break;
            case 9: z.innerHTML = 'Memphis';
            break;
            case 8: z.innerHTML = 'FAU';
            break;
            case 5: z.innerHTML = 'Duke';
            break;
            case 12: z.innerHTML= 'Oral Roberts';
            break;
            case 4: z.innerHTML=  'Tennessee';
            break;
            case 13: z.innerHTML=  'Louisiana';
            break;
            case 6: z.innerHTML=  'Kentuckey';
            break;
            case 11: z.innerHTML=  'Providance';
            break;
            case 3: z.innerHTML=  'Kansas St.';
            break;
            case 14: z.innerHTML=  'Montana St.';
            break;
            case 7: z.innerHTML=  'Michigan St.';
            break;
            case 10: z.innerHTML=  'USC';
            break;
            case 2: z.innerHTML=  'Marquette';
            break;
            case 15: z.innerHTML=  'Vermont';
        }
       

    } else {
        
        switch (y) {
            case 1: z.innerHTML = 'Purdue';
            break;
            case 16: z.innerHTML = 'FDU';
            break;
            case 9: z.innerHTML = 'Memphis';
            break;
            case 8: z.innerHTML = 'FAU';
            break;
            case 5: z.innerHTML = 'Duke';
            break;
            case 12: z.innerHTML= 'Oral Roberts';
            break;
            case 4: z.innerHTML=  'Tennessee';
            break;
            case 13: z.innerHTML=  'Louisiana';
            break;
            case 6: z.innerHTML=  'Kentuckey';
            break;
            case 11: z.innerHTML=  'Providance';
            break;
            case 3: z.innerHTML=  'Kansas St.';
            break;
            case 14: z.innerHTML=  'Montana St.';
            break;
            case 7: z.innerHTML=  'Michigan St.';
            break;
            case 10: z.innerHTML=  'USC';
            break;
            case 2: z.innerHTML=  'Marquette';
            break;
            case 15: z.innerHTML=  'Vermont';
        }
}}











// function to find winners of midwest division //






const findWinnerMidwest = (x, y, z) => {
    
    switch (x) {
        case 'Houston': x = 1;
        break;
        case 'N Kentucky': x = 16;
        break;
        case 'Iowa':  x = 9;
        break;
        case 'Auburn':  x = 8;
        break;
        case 'Miami': x = 5;
        break;
        case 'Drake': x = 12;
        break;
        case 'Indiana': x= 4;
        break;
        case '.Kent St': x= 13;
        break;
        case '.Iowa St': x= 6;
        break;
        case 'Pitt': x= 11;
        break;
        case 'Xavier': x= 3;
        break;
        case '.Kennesaw St': x= 14;
        break;
        case 'Texas A&M': x= 7;
        break;
        case '.Penn St': x= 10;
        break;
        case 'Texas': x=2;
        break;
        case 'Colgate': x=15

    }
    
    
    switch (y) {
        case 'Houston': y = 1;
        break;
        case 'N Kentucky': y = 16;
        break;
        case 'Iowa':  y = 9;
        break;
        case 'Auburn':  y = 8;
        break;
        case 'Miami': y = 5;
        break;
        case 'Drake': y = 12;
        break;
        case 'Indiana': y= 4;
        break;
        case '.Kent St': y= 13;
        break;
        case '.Iowa St': y = 6;
        break;
        case 'Pitt': y = 11;
        break;
        case 'Xavier': y= 3;
        break;
        case '.Kennesaw St': y= 14;
        break;
        case 'Texas A&M': y= 7;
        break;
        case '.Penn St': y= 10;
        break;
        case 'Texas': y=2;
        break;
        case 'Colgate': y=15
    }
   
    
    
    let diceRoll = Math.floor(Math.random() *101);
    let chanceOfWinning = Math.floor((x / (x + y)) *100)
    console.log(diceRoll);
    console.log(chanceOfWinning);
    if (chanceOfWinning <= diceRoll){
        
        switch (x) {
            case 1: z.innerHTML = 'Houston';
            break;
            case 16: z.innerHTML = 'N Kentucky';
            break;
            case 9: z.innerHTML = 'Iowa';
            break;
            case 8: z.innerHTML = 'Auburn';
            break;
            case 5: z.innerHTML = 'Miami';
            break;
            case 12: z.innerHTML= 'Drake';
            break;
            case 4: z.innerHTML=  'Indiana';
            break;
            case 13: z.innerHTML=  '.Kent St';
            break;
            case 6: z.innerHTML=  '.Iowa St';
            break;
            case 11: z.innerHTML=  'Pitt';
            break;
            case 3: z.innerHTML=  'Xavier';
            break;
            case 14: z.innerHTML=  '.Kennesaw St';
            break;
            case 7: z.innerHTML=  'Texas A&M';
            break;
            case 10: z.innerHTML=  '.Penn St';
            break;
            case 2: z.innerHTML=  'Texas';
            break;
            case 15: z.innerHTML=  'Colgate';
        }
       

    } else {
        
        switch (y) {
            case 1: z.innerHTML = 'Houston';
            break;
            case 16: z.innerHTML = 'N Kentucky';
            break;
            case 9: z.innerHTML = 'Iowa';
            break;
            case 8: z.innerHTML = 'Auburn';
            break;
            case 5: z.innerHTML = 'Miami';
            break;
            case 12: z.innerHTML= 'Drake';
            break;
            case 4: z.innerHTML=  'Indiana';
            break;
            case 13: z.innerHTML=  '.Kent St';
            break;
            case 6: z.innerHTML=  '.Iowa St';
            break;
            case 11: z.innerHTML=  'Pitt';
            break;
            case 3: z.innerHTML=  'Xavier';
            break;
            case 14: z.innerHTML=  '.Kennesaw St';
            break;
            case 7: z.innerHTML=  'Texas A&M';
            break;
            case 10: z.innerHTML=  '.Penn St';
            break;
            case 2: z.innerHTML=  'Texas';
            break;
            case 15: z.innerHTML=  'Colgate';
        }
}}







// function to find winners in west division // 









const findWinnerWest = (x, y, z) => {
    
    switch (x) {
        case 'Kansas': x = 1;
        break;
        case 'Howard': x = 16;
        break;
        case 'Arkansas':  x = 9;
        break;
        case 'Illinois':  x = 8;
        break;
        case 'Saint Marys': x = 5;
        break;
        case 'VCU': x = 12;
        break;
        case 'UConn': x= 4;
        break;
        case 'Iona': x= 13;
        break;
        case 'TCU': x= 6;
        break;
        case '.Arizona St': x= 11;
        break;
        case 'Gonzaga': x= 3;
        break;
        case 'Grand Canyon': x= 14;
        break;
        case 'Northwestern': x= 7;
        break;
        case '.Bosie St': x= 10;
        break;
        case 'UCLA': x=2;
        break;
        case 'UNC Asheville': x=15

    }
    
    
    switch (y) {
        case 'Kansas': y = 1;
        break;
        case 'Howard': y = 16;
        break;
        case 'Arkansas':  y = 9;
        break;
        case 'Illinois':  y = 8;
        break;
        case 'Saint Marys': y = 5;
        break;
        case 'VCU': y = 12;
        break;
        case 'UConn': y= 4;
        break;
        case 'Iona': y= 13;
        break;
        case 'TCU': y= 6;
        break;
        case '.Arizona St': y= 11;
        break;
        case 'Gonzaga': y= 3;
        break;
        case 'Grand Canyon': y= 14;
        break;
        case 'Northwestern': y= 7;
        break;
        case '.Bosie St': y= 10;
        break;
        case 'UCLA': y=2;
        break;
        case 'UNC Asheville': y=15
    }
   
    
    
    let diceRoll = Math.floor(Math.random() *101);
    let chanceOfWinning = Math.floor((x / (x + y)) *100)
    console.log(diceRoll);
    console.log(chanceOfWinning);
    if (chanceOfWinning <= diceRoll){
        
        switch (x) {
            case 1: z.innerHTML = 'Kansas';
            break;
            case 16: z.innerHTML = 'Howard';
            break;
            case 9: z.innerHTML = 'Arkansas';
            break;
            case 8: z.innerHTML = 'Illinois';
            break;
            case 5: z.innerHTML = 'Saint Marys';
            break;
            case 12: z.innerHTML= 'VCU';
            break;
            case 4: z.innerHTML=  'UConn';
            break;
            case 13: z.innerHTML=  'Iona';
            break;
            case 6: z.innerHTML=  'TCU';
            break;
            case 11: z.innerHTML=  '.Arizona St';
            break;
            case 3: z.innerHTML=  'Gonzaga';
            break;
            case 14: z.innerHTML=  'Grand Canyon';
            break;
            case 7: z.innerHTML=  'Northwestern';
            break;
            case 10: z.innerHTML=  '.Bosie St';
            break;
            case 2: z.innerHTML=  'UCLA';
            break;
            case 15: z.innerHTML=  'UNC Asheville';
        }
       

    } else {
        
        switch (y) {
            case 1: z.innerHTML = 'Kansas';
            break;
            case 16: z.innerHTML = 'Howard';
            break;
            case 9: z.innerHTML = 'Arkansas';
            break;
            case 8: z.innerHTML = 'Illinois';
            break;
            case 5: z.innerHTML = 'Saint Marys';
            break;
            case 12: z.innerHTML= 'VCU';
            break;
            case 4: z.innerHTML=  'UConn';
            break;
            case 13: z.innerHTML=  'Iona';
            break;
            case 6: z.innerHTML=  'TCU';
            break;
            case 11: z.innerHTML=  '.Arizona St';
            break;
            case 3: z.innerHTML=  'Gonzaga';
            break;
            case 14: z.innerHTML=  'Grand Canyon';
            break;
            case 7: z.innerHTML=  'Northwestern';
            break;
            case 10: z.innerHTML=  '.Bosie St';
            break;
            case 2: z.innerHTML=  'UCLA';
            break;
            case 15: z.innerHTML=  'UNC Asheville';
        }
}}






generate.addEventListener('click', function(){
findWinnerSouth('Alabama', 'Texas', sr2g1);
findWinnerSouth('Maryland', 'West Virgina', sr2g2);
findWinnerSouth('San Diego', 'Charleston', sr2g3);
findWinnerSouth('Virgina', 'Furman', sr2g4);
findWinnerSouth('Creighton', 'NC State', sr2g5);
findWinnerSouth('Baylor', 'UCSB', sr2g6);
findWinnerSouth('Missouri', 'Utah St.', sr2g7);
findWinnerSouth('Arizona', 'Princton', sr2g8);
findWinnerSouth(sr2g1.innerHTML, sr2g2.innerHTML, sr3g1);
findWinnerSouth(sr2g3.innerHTML, sr2g4.innerHTML, sr3g2);
findWinnerSouth(sr2g5.innerHTML, sr2g6.innerHTML, sr3g3);
findWinnerSouth(sr2g7.innerHTML, sr2g8.innerHTML, sr3g4);
findWinnerSouth(sr3g1.innerHTML, sr3g2.innerHTML, sr4g1);
findWinnerSouth(sr3g3.innerHTML, sr3g4.innerHTML, sr4g2);
findWinnerSouth(sr4g1.innerHTML, sr4g1.innerHTML, sr5);

findWinnerEast('Purdue', 'FDU', er2g1);
findWinnerEast('Memphis', 'FAU', er2g2);
findWinnerEast('Duke', 'Oral Roberts', er2g3);
findWinnerEast('Tennessee', 'Louisiana', er2g4);
findWinnerEast('Kentuckey', 'Providance', er2g5);
findWinnerEast('Kansas St.', 'Montana St.', er2g6);
findWinnerEast('Michigan St.', 'USC', er2g7);
findWinnerEast('Marquette', 'Vermont', er2g8);
findWinnerEast(er2g1.innerHTML, er2g2.innerHTML, er3g1);
findWinnerEast(er2g3.innerHTML, er2g4.innerHTML, er3g2);
findWinnerEast(er2g5.innerHTML, er2g6.innerHTML, er3g3);
findWinnerEast(er2g7.innerHTML, er2g8.innerHTML, er3g4);
findWinnerEast(er3g1.innerHTML, er3g2.innerHTML, er4g1);
findWinnerEast(er3g3.innerHTML, er3g4.innerHTML, er4g2);
findWinnerEast(er4g1.innerHTML, er4g2.innerHTML, er5);

findWinnerMidwest('Houston', 'N Kentucky', mr2g1);
findWinnerMidwest('Iowa', 'Auburn', mr2g2);
findWinnerMidwest('Miami', 'Drake', mr2g3);
findWinnerMidwest('Indiana', '.Kent St', mr2g4);
findWinnerMidwest('.Iowa St', 'Pitt', mr2g5);
findWinnerMidwest('Xavier', '.Kennesaw St', mr2g6);
findWinnerMidwest('Texas A&M', '.Penn St', mr2g7);
findWinnerMidwest('Texas', 'Colgate', mr2g8);
findWinnerMidwest(mr2g1.innerHTML, mr2g2.innerHTML, mr3g1);
findWinnerMidwest(mr2g3.innerHTML, mr2g4.innerHTML, mr3g2);
findWinnerMidwest(mr2g5.innerHTML, mr2g6.innerHTML, mr3g3);
findWinnerMidwest(mr2g7.innerHTML, mr2g8.innerHTML, mr3g4);
findWinnerMidwest(mr3g1.innerHTML, mr3g2.innerHTML, mr4g1);
findWinnerMidwest(mr3g3.innerHTML, mr3g4.innerHTML, mr4g2);
findWinnerMidwest(mr4g1.innerHTML, mr4g2.innerHTML, mr5);

findWinnerWest('Kansas', 'Howard', wr2g1);
findWinnerWest('Arkansas', 'Illinois', wr2g2);
findWinnerWest('Saint Marys', 'VCU', wr2g3);
findWinnerWest('UConn', 'Iona', wr2g4);
findWinnerWest('TCU', '.Arizona St', wr2g5);
findWinnerWest('Gonzaga', 'Grand Canyon', wr2g6);
findWinnerWest('Northwestern', '.Bosie St', wr2g7);
findWinnerWest('UCLA', 'UNC Asheville', wr2g8);
findWinnerWest(wr2g1.innerHTML, wr2g2.innerHTML, wr3g1);
findWinnerWest(wr2g3.innerHTML, wr2g4.innerHTML, wr3g2);
findWinnerWest(wr2g5.innerHTML, wr2g6.innerHTML, wr3g3);
findWinnerWest(wr2g7.innerHTML, wr2g8.innerHTML, wr3g4);
findWinnerWest(wr3g1.innerHTML, wr3g2.innerHTML, wr4g1);
findWinnerWest(wr3g3.innerHTML, wr3g4.innerHTML, wr4g2);
findWinnerWest(wr4g1.innerHTML, wr4g2.innerHTML, wr5);


})