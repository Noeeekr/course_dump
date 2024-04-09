class CreatePubSub<T extends Record<string, (...args: any[]) => void>> {

    private _eventMap = {} as Record<keyof T, Set<(...args: any[]) => void>>; 

    on<K extends keyof T>(event: keyof T,cb: T[K]): void {
        
        if (!this._eventMap[event]) 
            this._eventMap[event] = new Set();

        this._eventMap[event].add(cb);

    }

    emit(event: keyof T,args: any[]): void | false {

        if (!this._eventMap[event]) 
            return false;

        let i: number = 0;
        
        this._eventMap[event].forEach((cb) => {
            cb(args[i]);

            i++
        })
    }

    delete<K extends keyof T>(event: keyof T,cb: T[K]): void | false {

        if (!this._eventMap[event])
            return false;

        this._eventMap[event].delete(cb);
    }
}


const pubsub = new CreatePubSub<{
    NEW_VIDEO: (name: string) => void
}>();

    pubsub.on("NEW_VIDEO",(tell: string) => {
        console.log(tell);
    })

    pubsub.on("NEW_VIDEO",(tell2: string) => {
        console.log(tell2);
    })

    pubsub.emit("NEW_VIDEO",["ABC","IDK"])