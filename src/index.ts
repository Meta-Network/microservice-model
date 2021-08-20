export enum ServiceCode {
  UCENTER = 1,
  NETWORK = 2,
  CMS = 3,
}

export class MetaInternalResult {
  statusCode: number;
  serviceCode: ServiceCode;
  retryable: boolean;
  data?: any;
  message: string;

  constructor(init: Partial<MetaInternalResult> = {}) {
    this.statusCode = init.statusCode || 200;
    this.serviceCode = init.serviceCode;
    this.retryable = init.retryable || false;
    this.data = init.data || null;
    this.message = init.message || '';
  }

  get code(): number {
    return this.statusCode * 100000 + this.serviceCode * 100 + Number(this.retryable);
  }

  public isSuccess(): boolean {
    return ((this.statusCode >= 200 && this.statusCode < 300) || this.statusCode === 304)
  }
}
