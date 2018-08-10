export function formatQuestion (authedUser, user, question) {
    const { id, author, optionOne, optionTwo } = question
    const { name, avatarURL } = user

    return {
        name,
        id,
        author,
        avatar: avatarURL,
        optionOneText: optionOne.text,
        optionOneVotes: optionOne.votes.length,
        hasVotedOne: optionOne.votes.includes(authedUser),
        optionTwoText: optionTwo.text,
        optionTwoVotes: optionTwo.votes.length,
        hasVotedTwo: optionOne.votes.includes(authedUser), 
        questionTotalVotes: questionVotes(question).length,
        answered: questionVotes(question).includes(authedUser)
    }
}

export function formatUser (user) {
    const {name, avatarURL, answers, questions} = user

    return {
        name,
        avatar: avatarURL,
        answeredQuestions: Object.keys(answers).length,
        userQuestions: questions.length,
        totalPoints: Object.keys(answers).length + questions.length
    }
}

export function questionVotes (question) {
    return question.optionOne.votes.concat(question.optionTwo.votes) 
}

export function questionAnswered (authedUser, question) {
    return questionVotes(question).includes(authedUser)
}


export function questionUserAnswer(authedUser, users, qId) {
    return users[authedUser].answers[qId]
}

export const handleAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) //fake async
    },
    signout(cb){
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }
