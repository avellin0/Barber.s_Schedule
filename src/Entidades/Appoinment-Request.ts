interface AppointmentsProps {
    client: string,
    start: Date,
    end: Date,
}

export class Appointment {
    private props: AppointmentsProps

    get cliente() {
        return this.props.client
    }

    get start() {
        return this.props.start
    }

    get end() {
        return this.props.end
    }


    constructor(creator: AppointmentsProps) {
        const { start, end } = creator

        if (start <= new Date()) {
            throw new Error("Start should be hight than end");
        }

        if (end <= start) {
            throw new Error("End should be less than start");
        }


        this.props = creator
    }

}