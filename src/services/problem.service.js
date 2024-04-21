// const sanitizeMarkdownContent = require('../utils/');
const { markdownSanitizer } = require('../utils');

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
            console.log("Problem Data : ", problemData);
            problemData.description = markdownSanitizer(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            console.log("Problem created : ", problem);
            return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }
}

module.exports = ProblemService;