export class Customer {

    constructor(private _firstName: string, private _lastName: string){
    }

    public set firstName(theFirst: string){
        this._firstName = theFirst;
    }
    public get firstName(): string {
       return this._firstName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }

}

