import { logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
@logger
export default class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    @logMethod
    assistCutomer (@logParameter custName: string): void {
        console.log(`${this.name} assists ${custName}`);
    };

    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching Community');
    }
}