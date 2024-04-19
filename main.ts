#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx simple calculator xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const loop = true;
console.log(chalk.bgGray("\n *x*x*x*x*x* Welcome to use my CALCULATOR *x*x*x*x*x* "));
console.log("___________________________________________________\n");
while (loop) {

//_______________________ I made selection list first for user to use it in easy way  _______________________
    let Calc = await inquirer.prompt([
        {
            name: "myCalcultor",
            type: "list",
            message: chalk.yellow("List Options Selection :\n\n"),
            choices: ["Add", "Sub", "Mul", "Div", "Mod", "Pow", "Sqrt", "Exit"]
        },

    ]);

//____________________list choices start from here_________________________________
    if (Calc.myCalcultor === "Add") {
        const Add = await inquirer.prompt([
            {
                name: "Add1",
                type: "number",
                message: "Enter first number : "
            },
            {
                name: "Add2",
                type: "number",
                message: "Enter second number : "
            },
        ]);
        console.log(Add.Add1 + Add.Add2);
    }
//_________________________________________________
    else if (Calc.myCalcultor === "Sub") {
        const Sub = await inquirer.prompt([
            {
                name: "Sub1",
                type: "number",
                message: "Enter first number : "
            },
            {
                name: "Sub2",
                type: "number",
                message: "Enter second number : "
            },
        ]);
        console.log(Sub.Sub1 - Sub.Sub2);
    }
//_________________________________________________
    else if (Calc.myCalcultor === "Mul") {
        const Mul = await inquirer.prompt([
            {
                name: "Mul1",
                type: "number",
                message: "Enter first number : "
            },
            {
                name: "Mul2",
                type: "number",
                message: "Enter second number : "
            },
        ]);
        console.log(Mul.Mul1 * Mul.Mul2);
    }
//_________________________________________________
    else if (Calc.myCalcultor === "Div") {
        const Div = await inquirer.prompt([
            {
                name: "Div1",
                type: "number",
                message: "Enter first number : "
            },
            {
                name: "Div2",
                type: "number",
                message: "Enter second number : "
            },
        ]);
        console.log(Div.Div1 / Div.Div2);
    }
//_________________________________________________
    else if (Calc.myCalcultor === "Mod") {
        const Mod = await inquirer.prompt([
            {
                name: "Mod1",
                type: "number",
                message: "Enter first number : "
            },
            {
                name: "Mod2",
                type: "number",
                message: "Enter second number : "
            }]);
        console.log(Mod.Mod1 % Mod.Mod2);
    }
//_____________________________________________________
    else if (Calc.myCalcultor === "Pow") {
        const Pow = await inquirer.prompt([
            {
                name: "Pow1",
                type: "number",
                message: "Enter first number : "
            },
            {
                name: "Pow2",
                type: "number",
                message: "Enter second number : "
            }
        ]);
        console.log(Pow.Pow1 ** Pow.Pow2);
    }
//_____________________________________________________
    else if (Calc.myCalcultor === "Sqrt") {
        const Sqrt = await inquirer.prompt([
            {
                name: "Sqrt",
                type: "number",
            }]);
        console.log(Math.sqrt(Sqrt.Sqrt));
    }
//_____________________________________________________
    else if (Calc.myCalcultor === "Exit") {
        break;
    }
//________________________________________________________
    else { console.log("Thanks for using my calculator.");
    }
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx todo_list xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let list = [];
let todo_item = true;
console.log(chalk.bgMagenta("\n *x*x*x*x*x* 🤱AMMI KY SAMAN KI LIST🤱 *x*x*x*x*x* "));
console.log("___________________________________________________");
while (todo_item) {
    let OptionSelection_list = await inquirer.prompt([
        {
            name: "todo",
            type: "list",
            message: chalk.bgRedBright("\n\n List Options Selection : \n\n"),
            choices: ["Add todo_list  \t(*** 💁‍♀️Ya saman lana hy beta***)", "Delete from_list  \t(*** 🙅‍♀️Ya nhi lany hain beta***)", "Show items  \t\t(*** 📑 Kia kia likha hy saman main dekhou beta***)", "Exit \t\t\t(** Sigh!😮‍💨 beta ya tankha jab aai gi tab milyga.**)"]
        },
    ]);
    //_________________________________________Add todo_list ________________________________
    if (OptionSelection_list.todo === "Add todo_list  \t(*** 💁‍♀️Ya saman lana hy beta***)") {
        let Option_add = await inquirer.prompt([
            {
                name: "additems",
                type: "string",
                message: chalk.magenta("🤱 Ammi saman bool dain: "),
            },
        ]);
        list.push(Option_add.additems);
        console.log(list);
        console.log(chalk.bgGray("🤱 Ammi ya to kam ✍️ hy kuch or nhi lana phir main ny nhi lounga,PUBG 👨‍💻 khailna hy."));
    }
    //_________________________________________Delete todo_list __________________________________
    else if (OptionSelection_list.todo === "Delete from_list  \t(*** 🙅‍♀️Ya nhi lany hain beta***)") {
        if (list.length > 0) {
            let Option_delete = await inquirer.prompt([
                {
                    name: "Delete",
                    type: "list",
                    message: chalk.bgYellow("🤱😤Ammi kia hatana hy saman 💸:"),
                    choices: list,
                },
            ]);
            const remove = list.indexOf(Option_delete.Delete);
            list.splice(remove, 1);
            console.log(list);
        }
        else {
            console.log("🤱😒 Ammi kuch likha hy nhi abi tk phly likh wa dain phir main update kr deta hoon📜.\n");
        }
    }
    //_________________________________________Show todo_list __________________________________
    else if (OptionSelection_list.todo === "Show items  \t\t(*** 📑 Kia kia likha hy saman main dekhou beta***)") {
        console.log("🤱🤓 (Show Items) 📜 Ammi Final hy ya ab .");
        list.forEach((add) => {
            console.log(`🤱_Saman: ${add}`);
        });
    }
    //_________________________________________Exit todo_list __________________________________
    else if (OptionSelection_list.todo === "Exit \t\t\t(** Sigh!😮‍💨 beta ya tankha jab aai gi tab milyga.**)") {
        todo_item = false;
    }
    //_________________________________________option_list end __________________________________
    else {
        console.log(chalk.yellowBright("🤱😒 Ammi Jo bnaya hy isi main sy option select krain warna meri list kisi kam ki nhi hy📜."));
    }
}
console.log(chalk.magenta("-x-x-x-x-x- 👩‍💻 BushraJan 👩‍💻 -x-x-x-x-x- \n"));


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Currency converter xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

console.log(chalk.yellowBright("\nXXXXX WELCOME TO CHANGE CURRENCY CONVERTER OF BJ XXXXXX\n"));
const currency: any = {
    USD: 1, // 1 USD = 1 USD
    EUR: 0.8, // 1 USD = 0.84 EUR
    PKR: 166, // 1 USD = 166.23 PKR
    INR: 73, // 1 USD = 73.18 INR
}
let Answer: any = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.bgBlueBright("\nChange Currency Amount:\n"),
        choices: ["PKR", "USD", "INR", "EUR"],


    },
    {
        name: "to",
        type: "list",
        message: chalk.bgBlueBright("\nWhat currency do you want to convert from?\n"),
        choices: ["PKR", "USD", "INR", "EUR"],
    },

    {
        name: "amount",
        type: "number",
        message: chalk.bgGray("\nInput your amout that you want to convert:"),
    },
]);
let from_amount: any = currency[Answer.from];
let to_amount: any = currency[Answer.to];
let ui_amount = Answer.amount;
let output_amount = ui_amount / from_amount;
let desired_amount = output_amount * to_amount;
console.log("$" + output_amount);


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Number guessing game xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

async function start_Func() {
    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter Number Between 1 - 10: "
        }
    ])
    const { userGuess } = userNum;
    console.log("Your Guess: ", userGuess, "\nSystem's Guess:", systemNum);
    if (userGuess === systemNum) {
        console.log("Your Guess Is Correct \nYou Won!");
    }
    else {
        console.log("Better Luck Next Time");
    }
}
async function start_again() {
    do {
        await start_Func();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue? Press Y or N"
        })
    }
    while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes")
}
start_again();
console.log("Complete By Bushrajan.")

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ATM xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

async function my_Bank() {

    let mybalance = 70000;
    let myPinCode = 32361055;
    let Pincode = await inquirer.prompt([
        {
            name: 'pin',
            type: 'number',
            message: '\n\nEnter your PinCode:',
        }
    ]);
    if (Pincode.pin == myPinCode) {
        console.log("\nCorrect Pincode !!\n");
        let OptionsAns = await inquirer.prompt([
            {
                name: 'option',
                type: 'list',
                message: '\n\nPlease select option from below:',
                choices: ['Withdraw', 'Check_balance', 'Fast_cash'],
            },
        ]);


        if (OptionsAns.option === 'Withdraw') {
            let AmountAns = await inquirer.prompt([
                {
                    name: 'amount',
                    type: 'number',
                    message: '\nEnter your Amount:',
                }
            ]);
            if (AmountAns.amount < mybalance) {
                mybalance -= AmountAns.amount;
                console.log(`Your current balance is ${mybalance}.`);
            }
            else {
                console.log(`\nNot enough balance...\n`);
            }

        }

        else if (OptionsAns.option === 'Check_balance') {
            console.log(`\nYour Current balance is ${mybalance}.\n`);
        }

        else if (OptionsAns.option === 'Fast_cash') {
            let FastcashAmountAns = await inquirer.prompt([
                {
                    name: 'fastcashamount',
                    type: 'list',
                    message: '\nEnter your Fast_Cash_Amount:',
                    choices: [40000, 50000, 30000],
                }
            ]);

            if (FastcashAmountAns.fastcashamount < mybalance) {

                if (FastcashAmountAns.fastcashamount === 40000) {
                    mybalance -= FastcashAmountAns.fastcashamount;
                    console.log(`\nYour current balance is ${mybalance}.`);
                }
                else if (FastcashAmountAns.fastcashamount === 50000) {
                    mybalance -= FastcashAmountAns.fastcashamount;
                    console.log(`Your current balance is ${mybalance}.`);
                }
                else if (FastcashAmountAns.fastcashamount === 30000) {
                    mybalance -= FastcashAmountAns.fastcashamount;
                    console.log(`Your current balance is ${mybalance}.`);
                }
            }
            else {
                console.log(`\nNot enough balance...\n`);
            }
        }
    }
    else {
        console.log(`\nPlease enter valid Pincode...\n`);
    }
}
my_Bank();