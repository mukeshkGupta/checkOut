import { PaymentInstrument } from '../payment';

export default interface InternalOrderRequestBody {
    cartId: string;
    payment?: InternalOrderPaymentRequestBody;
    useStoreCredit?: boolean;
    customerMessage?: string;
    externalSource?: string;
    shouldSaveInstrument?: boolean;
}

export interface InternalOrderPaymentRequestBody {
    name: string;
    gateway?: string;
    paymentData?: PaymentInstrument;
}
