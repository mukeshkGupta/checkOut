import { CardInstrument } from '../payment/instrument';

import HostedFieldType from './hosted-field-type';
import { HostedFieldStylesMap } from './hosted-form-options';
import HostedFormOrderData from './hosted-form-order-data';

export enum HostedFieldEventType {
    AttachRequested = 'HOSTED_FIELD:ATTACH_REQUESTED',
    SubmitRequested = 'HOSTED_FIELD:SUBMITTED_REQUESTED',
    ValidateRequested = 'HOSTED_FIELD:VALIDATE_REQUESTED',
    FieldValueRequested = 'HOSTED_FIELD:FIELD_VALUE_REQUESTED',
}

export interface HostedFieldEventMap {
    [HostedFieldEventType.AttachRequested]: HostedFieldAttachEvent;
    [HostedFieldEventType.SubmitRequested]: HostedFieldSubmitRequestEvent;
    [HostedFieldEventType.ValidateRequested]: HostedFieldValidateRequestEvent;
    [HostedFieldEventType.FieldValueRequested]: HostedFieldValueRequestEvent;
}

export type HostedFieldEvent =
    | HostedFieldAttachEvent
    | HostedFieldSubmitRequestEvent
    | HostedFieldValidateRequestEvent
    | HostedFieldValueRequestEvent;

export interface HostedFieldAttachEvent {
    type: HostedFieldEventType.AttachRequested;
    payload: {
        accessibilityLabel?: string;
        cardInstrument?: CardInstrument;
        fontUrls?: string[];
        placeholder?: string;
        styles?: HostedFieldStylesMap;
        origin?: string;
        type: HostedFieldType;
    };
}

export interface HostedFieldSubmitRequestEvent {
    type: HostedFieldEventType.SubmitRequested;
    payload: {
        data: HostedFormOrderData;
        fields: HostedFieldType[];
    };
}

export interface HostedFieldValidateRequestEvent {
    type: HostedFieldEventType.ValidateRequested;
}

export interface HostedFieldValueRequestEvent {
    type: HostedFieldEventType.FieldValueRequested;
}
