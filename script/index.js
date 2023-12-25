class Pawn {
    constructor(type) {
        this.image = `../public/${type}_pawn.png`;
        this.type = type;
    }

  
    create(cellId) {
        const cell = document.querySelector(`#${cellId}`);
        const pawnId = this.type=='black' ? `${cellId}-P` : `${cellId}-p`;
        cell.innerHTML = `<img src="${this.image}" alt="pawn" id="${pawnId}" class="meterial">`;
        
    }
    static move(col,row) {
      
          return [`${String.fromCharCode(97-(col+1) % 26)}${row+1}`];
        }
      
       
      }
      
     
      
    

class King{
    constructor(type){
        this.image =`../public/${type}_king.png`;
        this.type = type;
    }
    create(cellId){
        const pawnId = this.type=='black' ? `${cellId}-K` : `${cellId}-k`;
        let cell = document.querySelector(`#${cellId}`);
        cell.innerHTML = `<img src="${this.image}" alt="pawn" id ="${pawnId}" class="meterial">`
    }
}

class Queen{
    constructor(type){
        this.image =`../public/${type}_queen.png`;
        this.type = type;
    }
    create(cellId){
        const pawnId = this.type=='black' ? `${cellId}-Q` : `${cellId}-q`;
        let cell = document.querySelector(`#${cellId}`);
        cell.innerHTML = `<img src="${this.image}" alt="pawn" id ="${pawnId}" class="meterial">`
    }
}

class Bishop{
    constructor(type){
        this.image =`../public/${type}_bishop.png`;
        this.type = type;
    }
    create(cellId){
        const pawnId = this.type=='black' ? `${cellId}-B` : `${cellId}-b`;
        let cell = document.querySelector(`#${cellId}`);
        cell.innerHTML = `<img src="${this.image}" alt="pawn" id ="${pawnId}" class="meterial">`
    }
}

class Knight{
    constructor(type){
        this.image =`../public/${type}_knight.png`;
        this.type = type;
    }
    create(cellId){
        const pawnId = this.type=='black' ? `${cellId}-N` : `${cellId}-n`;
        let cell = document.querySelector(`#${cellId}`);
        cell.innerHTML = `<img src="${this.image}" alt="pawn" id ="${pawnId}" class="meterial">`
    }
}

class Rook{
    constructor(type){
        this.image =`../public/${type}_rook.png`;
        this.type = type;
    }
    create(cellId){
        const pawnId = this.type=='black' ? `${cellId}-R` : `${cellId}-r`;
        let cell = document.querySelector(`#${cellId}`);
        cell.innerHTML = `<img src="${this.image}" alt="pawn" id ="${pawnId}" class="meterial">`
    }
}



class ChessBoard{
    constructor(){
        this.ChessBoard = [
            ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
            ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
            ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
            ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
            ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
            ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
            ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
            ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
          ];
        this.possitionArray = [];
        this.defaultPosition = 'RNBQKBNR/PPPPPPPP/8/8/8/8/pppppppp/rnbqkbnr';
        this.movePiece_from = "";
        this.movePiece_to = "";
    }
    movePiece(x,y){
        let sId = x.split('-')[0];
        let piece_type = x.split('-')[1];
        let dId = y;
        {

            const startMusic = new Audio('../public/Sound/move.wav');
            startMusic.volume = 0.4
            startMusic.play()
        }
        if(piece_type === 'p'){
            let pawn = new Pawn('white');
            pawn.create(`${dId}`);
        }
        else if(piece_type === 'P'){
            let pawn = new Pawn('black');
            pawn.create(`${dId}`);
        }
        // king
        else if(piece_type === 'k'){
            let pawn = new King('white');
            pawn.create(`${dId}`);
        }
        else if(piece_type === 'K'){
            let pawn = new King('black');
            pawn.create(`${dId}`);
        }
        // queen
        else if(piece_type === 'q'){
            let pawn = new Queen('white');
            pawn.create(`${dId}`);
        }
        else if(piece_type === 'Q'){
            let pawn = new Queen('black');
            pawn.create(`${dId}`);
        }
        // rook
        else if(piece_type === 'r'){
            let pawn = new Rook('white');
            pawn.create(`${dId}`);
        }
        else if(piece_type === 'R'){
            let pawn = new Rook('black');
            pawn.create(`${dId}`);
        }
        // knight
        else if(piece_type === 'n'){
            let pawn = new Knight('white');
            pawn.create(`${dId}`);
        }
        else if(piece_type === 'N'){
            let pawn = new Knight('black');
            pawn.create(`${dId}`);
        }
        // bishop
        else if(piece_type === 'b'){
            let pawn = new Bishop('white');
            pawn.create(`${dId}`);
        }
        else if(piece_type === 'B'){
            let pawn = new Bishop('black');
            pawn.create(`${dId}`);
        }
     
        document.querySelector(`#${sId}`).innerHTML = "";

    }
    move() {
        const pawnPiece = document.querySelector(`#chessboard`);
        pawnPiece.addEventListener('click', (event) => {
            
           if(this.movePiece_from === ""){
                if(event.target.id.length > 2){

                    this.movePiece_from =  event.target.id;
                    let MoveList = moveAblePath(event.target.id);
                    console.log(MoveList);
                    console.log('from captured',event.target.id);
                }
                
                
            }else{
                if(event.target.id.length == 2){

                    this.movePiece_to = event.target.id;
                    console.log('to captured',event.target.id);
                    this.movePiece(this.movePiece_from,this.movePiece_to);
                    this.movePiece_from = "";
                    this.movePiece_to = "";
                }
           }
           
        });
    }
    start(){
        let col = 0;
        let row =0;        

        this.defaultPosition.split('/').forEach((str)=>{
                row = 0;
                if(str != '8'){
     
                    for(row = 0;row <8;row++){
                        // pawn
                        if(str[row] === 'p'){
                            let pawn = new Pawn('white');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        else if(str[row] === 'P'){
                            let pawn = new Pawn('black');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        // king
                        else if(str[row] === 'k'){
                            let pawn = new King('white');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        else if(str[row] === 'K'){
                            let pawn = new King('black');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        // queen
                        else if(str[row] === 'q'){
                            let pawn = new Queen('white');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        else if(str[row] === 'Q'){
                            let pawn = new Queen('black');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        // rook
                        else if(str[row] === 'r'){
                            let pawn = new Rook('white');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        else if(str[row] === 'R'){
                            let pawn = new Rook('black');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        // knight
                        else if(str[row] === 'n'){
                            let pawn = new Knight('white');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        else if(str[row] === 'N'){
                            let pawn = new Knight('black');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        // bishop
                        else if(str[row] === 'b'){
                            let pawn = new Bishop('white');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                        else if(str[row] === 'B'){
                            let pawn = new Bishop('black');
                            pawn.create(`${this.ChessBoard[row][col]}`);
                        }
                    }
                    
                }
                col++;
                
        });
        this.move();
    }
    
}
function main(){
    const chess = new ChessBoard();
    chess.start();
}

main();

function moveAblePath(Source_Position){
    const currPos = Source_Position.split('-')[0]; 
    const type = Source_Position.split('-')[1]; 

    let row = parseInt(currPos[1])-1;
    let col = currPos[0].charCodeAt(0) - 'a'.charCodeAt(0);
    console.log(currPos,row,col);
    if(type === 'p' || type === 'P'){
        return Pawn.move(col,row,type);
    }
    return MoveList;
}

function Highlight(moveList){
    moveList.forEach((ele)=>{
        let box = document.getElementById(ele);
        if(box.innerHTML == ""){

            box.append('div');
        }
    })
}