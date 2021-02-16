import * as Interfaces from '../interfaces';

export default class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCutomer (custName: string): void {
        console.log(`${this.name} assists ${custName}`);
    };
}