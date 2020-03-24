async function loadQuestionsById(db,formType) {
    return db.collection('questions').find({"form_type":formType}).toArray();
    }

  async function loadAllQuestions(db) {
   return db.collection('questions').find().toArray();
  }

  async function deleteFormData(db, questionId) {
    db.collection('questions').deleteOne({ id: questionId });
  }

  module.exports = {
    load: loadAllQuestions,
    loadQuestionsById,
  };
  