export { };

type Product = {
    id: number,
    name: string,
    age: number
}
type Product2 = {
    id: number,
    name: string,
    status: boolean
}
type MegreType = Product | Product2;

const name: string = "Binh";
const age: number = 19;
const status: boolean = true;
const obj: Product = { id: 1, name: "Le", age: 19 };
const arrNumber: number[] = [1, 2, 3];
const arrString: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const arrObj: MegreType[] = [
    { id: 1, name: "Binh", age: 20 },
    { id: 2, name: "Dung", age: 19 },
    { id: 3, name: "Tham", status: true }
];

function sum(numA: number, numB: number) {
    return numA + numB;
}
console.log(sum(12, 22));