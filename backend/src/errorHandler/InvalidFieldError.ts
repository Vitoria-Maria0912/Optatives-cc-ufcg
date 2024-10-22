export class InvalidFieldError extends Error {
    public statusCode: number;

    constructor(message: string) {
        super(message);
        this.name = 'InvalidFieldError';
        this.statusCode = 300;
    }
}
