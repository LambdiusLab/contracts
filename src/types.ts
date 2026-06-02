import { AccountOperation, InvalidationScope, MembershipOperation } from "./enums";

declare global {
    namespace Events {
        namespace AccessCache {
            type Invalidation = {
                items: Item[];
            };

            type Item = AccountRealmItem | RealmItem | AccountItem | GlobalItem;

            type AccountRealmItem = {
                scope: InvalidationScope.ACCOUNT_REALM;
                account: string;
                realm: string;
            };

            type RealmItem = {
                scope: InvalidationScope.REALM;
                realm: string;
            };

            type AccountItem = {
                scope: InvalidationScope.ACCOUNT;
                account: string;
            };

            type GlobalItem = {
                scope: InvalidationScope.GLOBAL;
            };
        }

        namespace Membership {
            type Event = {
                operation: MembershipOperation;
                account: string;
                realm: string;
            };
        }

        namespace Account {
            type Register = {
                account: string;
            };

            type Purge = {
                account: string;
            };

            type Event = {
                eventType: AccountOperation;
                payload: Register | Purge;
            };
        }

        namespace Blacklist {
            type Event = {
                eventType: "SESSION_REVOKED";
                payload: {
                    expiresAt: number;
                    session: string;
                };
            };
        }

        namespace ElevatedAccess {
            type Event = {
                eventType: "ELEVATED_ACCESS_GRANTED";
                payload: {
                    expiresAt: number;
                    session: string;
                };
            };
        }
    }

    namespace Consumers {
        namespace DLQ {
            type Message = {
                originalTopic: string;
                payload: unknown;
                error: string;
            };
        }
    }
}
