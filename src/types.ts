import {
    ReauthenticationTopicAction,
    AccessCacheTopicAction,
    MembershipTopicAction,
    BlacklistTopicAction,
    AccountTopicAction,
    InvalidationScope,
    RealmTopicAction,
} from "./enums";

declare global {
    namespace Topics {
        namespace AccessCache {
            type Message = {
                actionType: AccessCacheTopicAction;
                payload: {
                    items: Item[];
                };
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
            type Message = GrantMessage | RevokeMessage;

            type GrantMessage = {
                actionType: MembershipTopicAction.GRANT;
                payload: {
                    account: string;
                    realm: string;
                    joinedAt: number;
                    invitedBy: string;
                };
            };

            type RevokeMessage = {
                actionType: MembershipTopicAction.REVOKE;
                payload: {
                    account: string;
                    realm: string;
                };
            };
        }

        namespace Realm {
            type Message = {
                actionType: RealmTopicAction;
                payload: {
                    realm: string;
                    version: number;
                };
            };
        }

        namespace Account {
            type Message = {
                actionType: AccountTopicAction;
                payload: {
                    account: string;
                };
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

        namespace Reauthentication {
            type Message = {
                actionType: ReauthenticationTopicAction;
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
