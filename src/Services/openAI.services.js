class OpenAIService {
  constructor() {
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
  }

  async corregirFrase(frase) {
    try {

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer`,
              'OpenAI-Project': 'proj_VZAFd31Ht5kh6MPUFd7m3aXj',
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo', // Especifica el modelo de OpenAI
              messages: [{ role: 'user', content: `Correct this sentence: "${frase}"` }],
              temperature: 0.7,
            }),
          });
          
          const data = await response.json();
          console.log('Unexpected frase response:', frase);
          console.log('Unexpected API response:', data);
          return data.choices[0].message.content;
        } catch (error) {
          console.error('Error correcting text:', error);
          return 'Error correcting text';
        }
  }
}

export default new OpenAIService();

/*
async function getChatCompletion(prompt, model = "gpt-3.5-turbo") {
    try {

      const response = await openai.ChatCompletion.create({
        model,
        messages,
        temperature: 0,
      });
  
      // Devolviendo el contenido de la respuesta generada
      return response.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching chat completion:", error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }*/