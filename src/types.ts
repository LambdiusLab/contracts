import {
    ElevatedAccessTopicAction, 
    AccessCacheTopicAction,
    MembershipTopicAction,
    BlacklistTopicAction,
    AccountTopicAction,
    InvalidationScope
} from "./enums";

declare global {
    namespace Topics {
        namespace AccessCache {
            type Message = {
                actionType: AccessCacheTopicAction,
                payload: {
                    items: Item[];
                }
            }

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
            type Message = {
                actionType: MembershipTopicAction;
                payload: {
                    account: string;
                    realm: string;
                }
            };
        }

        namespace Account {
            type Message = {
                actionType: AccountTopicAction;
                payload: {
                    account: string;
                }
            };
        }

        namespace Blacklist {
            type Message = {
                actionType: BlacklistTopicAction;
                payload: {
                    expiresAt: number;
                    session: string;
                };
            };
        }

        namespace ElevatedAccess {
            type Message = {
                actionType: ElevatedAccessTopicAction;
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
