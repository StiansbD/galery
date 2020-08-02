export class InputService {
    private error: string;
    private default: boolean;

    isFailed(): boolean {
        return !((this.error != "") && (!this.default));
    }

    isSuccess(): boolean {
        return !((this.error === "") && (!this.default));
    }

    setDefault(value: boolean): void {
        this.default = value;
    }

    initDefault(): void {
        this.setDefault(true);
    }

    setError(error: string): void {
        this.error = error;
    }

    getError(): string {
        return this.error;
    }

    hasAnError(): boolean {
        if (this.default)
            return true;
        else if (this.getError() != "")
            return true;
        return false;
    }

    initError(): void {
        this.setError("");
    }

    initInput(): void {
        this.initDefault();
        this.initError();
    }
}