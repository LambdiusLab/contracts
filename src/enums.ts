export enum InvalidationScope {
    /* eslint-disable prettier/prettier */
    ACCOUNT_REALM = "ACCOUNT_REALM",
    ACCOUNT       = "ACCOUNT",
    GLOBAL        = "GLOBAL",
    REALM         = "REALM",
    /* eslint-enable prettier/prettier */
}

export enum KafkaTopic {
    /* eslint-disable prettier/prettier */
    ACCESS_CACHE_INVALIDATION_DLQ = "access-cache-invalidation-dlq",
    ACCESS_CACHE_INVALIDATION     = "access-cache-invalidation",
    PROJECTION_JOURNAL_DLQ        = "projection-journal-dlq",
    PROJECTION_JOURNAL            = "projection-journal",
    NOTIFICATION_DLQ              = "notification-dlq",
    IDENTIFIER_DLQ                = "identifier-dlq",
    NOTIFICATION                  = "notification",
    ACCOUNT_DLQ                   = "account-dlq",
    IDENTIFIER                    = "identifier",
    BLACKLIST                     = "blacklist",
    ACCOUNT                       = "account",
    /* eslint-enable prettier/prettier */
}

export enum MessageTemplate {
    /* eslint-disable prettier/prettier */
    IDENTIFIER_VERIFICATION_OTP = "IDENTIFIER_VERIFICATION_OTP",
    ACCOUNT_VERIFICATION_OTP    = "ACCOUNT_VERIFICATION_OTP",
    RESET_PASSWORD_OTP          = "RESET_PASSWORD_OTP",
    LOGIN_OTP                   = "LOGIN_OTP"
    /* eslint-enable prettier/prettier */
}
