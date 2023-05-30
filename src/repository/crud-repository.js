class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndRemove(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.finByIdAndUpdate(id, data, {
                new: true,
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;
