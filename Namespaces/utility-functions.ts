namespace Utility {
    export namespace Fees {
        export function calculateLatefee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }
    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFunc(): void {
        console.log('this is a private functions');
    }
}