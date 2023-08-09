import { UserEntity } from "../../../entities/user.entity"
import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm"
import * as bcrypt from 'bcrypt';
@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
    /**
     * Indicates that this subscriber only listen to user events.
     */
    listenTo() {
        return UserEntity
    }

    /**
     * Called before user insertion.
     */
    async beforeInsert(event: InsertEvent<UserEntity>) {
        console.log(`BEFORE POST INSERTED: `, event.entity)
        event.entity.password = await bcrypt.hash(event.entity.password, 12)
    }
}