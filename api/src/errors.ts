class AppError {
  public readonly status: number;
  public readonly message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
};

export { AppError }