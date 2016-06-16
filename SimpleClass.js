import {MyBase} from "MyBase";
import {compute,val2} from "SomeOtherModule";
import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

//Adding a decorator  
@inject(HttpClient)

export class SimpleClass extends MyBase{
	constructor(http){
		super();
		this.name="Brenda";

	}

	//class properties 
	myproperty=42;

	get message()
	{
		let threshold=40;
		//it can cause grabage collection problems
		//let result= "Hello "+this.name+ ", are you"+(5+threshold)+" years old?";
		let result=`Hello ${this.name}, are you ${5+threshold} years old ?`;
		return result;
	}

	calculate()
	{
		return compute() + val2;
	}


	//adding an async promise
	startEngine(callback){
		var promise= new Promise (function (resolve, reject){
			setTimeout(function(){
				resolve("Roar!!");
			}, 5000);
		});

	return promise;	
	}
}
