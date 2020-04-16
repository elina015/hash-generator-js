'use strict'; //строгий режим обработки кода

class hashGenerator {
	// startSymbolCode (int) //число, характ. начальный набор символов
	// finishSymbolCode (int) // конечный набор символов
	// hashLength (int) //длина хеш
	// hash - (string || false) // хеш, выводит строку (успешно), либо при неправильном вводе длины хеша , возвр. false 
	constructor (hashLength) {
		this.startSymbolCode = 48; //0
		this.finishSymbolCode = 126;
		
		if (  !isNaN(parseInt(hashLength))  ){ //если  ввел число
			this.hashLength = parseInt(hashLength); //присваеваем заданную длину хеша 
			this.generateHash(); //генерируем хеш
		}
		else {
			this.hash = false;
		}
	}

	//генерируем случайное число 
	///вспомогательный метод для дальнейшенго метода хеширования
	randomInteger(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	}

	//хеш-генератор
	//прогоняем функцию по количеству символов хеша, генерирует случайное число между мин и макс. кот. я задала
	//и дальше сгенерированное число перегоняем в символ и добавляем в хеш 
	generateHash (){
		this.hash = '';
		for(let i=0; i<this.hashLength; i++){
			this.hash +=  String.fromCharCode(this.randomInteger(this.startSymbolCode,this.finishSymbolCode)); 

		}
	}
}

