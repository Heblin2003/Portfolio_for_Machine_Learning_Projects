import React from 'react';
import './text.css';
import image from '../../assets/text1.png'

const text = () => {
  return (
    <div class="text">
      <div className='navbar1'>
        <div className='navbar-links1'>
        <img src={image}/>
            <div className='navbar-logo1'>
              <h2> Text Summarization</h2>
              <p>hiopjlasdfghjkl,kjhgfdsd</p>
            </div>
        </div>
        <div className='navbar-container1'>
           <h1>Text Summarization</h1>
           <button>Get Started</button>
        </div>
      </div>

      <div className='text-heading'>
        <h1> Text Summarization</h1>
        <div className='text-img'>
        <img src={image}/>
          <div className='text-content'>
            <h2>Problem Statement</h2>
            <p>Text summarization addresses the challenge of condensing large volumes of text into concise and coherent summaries while retaining the essential information. With the increasing volume of textual data available, the need for efficient summarization techniques has become crucial. The manual extraction of key information from lengthy documents is time-consuming, and automatic text summarization aims to alleviate this challenge.</p>
            <h2>Why is this needed:</h2>
            <p>a. Information Overload: The digital age has led to an abundance of information, making it challenging for individuals and organizations to sift through vast amounts of text to extract relevant details. Text summarization helps manage information overload by providing condensed and meaningful summaries.<br></br><br></br>
b. Time Efficiency: Reading and comprehending lengthy documents can be time-consuming. Text summarization accelerates the process by offering concise summaries, enabling users to quickly grasp the main points without delving into the entire document.<br></br><br></br>
c. Decision-Making Support: In various domains such as business, research, and journalism, quick access to key information is crucial for informed decision-making. Text summarization facilitates this process by distilling essential content from lengthy documents.<br></br><br></br>
d. Language Translation: Text summarization is valuable in multilingual scenarios, where it can aid in summarizing content in one language for translation into another, helping bridge language barriers.<br></br><br></br>
e. Content Extraction for NLP: Natural Language Processing (NLP) applications often require condensed representations of text for efficient processing. Text summarization plays a vital role in extracting relevant content for NLP tasks.<br></br><br></br>
</p>
<h2>How it works:</h2>
<p>
a. Text Preprocessing: The input text undergoes preprocessing, which includes tasks such as tokenization, stemming, and removing stop words to enhance the efficiency of the summarization process.b. Content Analysis: The system analyses the content to identify key sentences, phrases, or concepts that encapsulate the essential information. This may involve natural language understanding and semantic analysis.<br></br><br></br>
c. Importance Ranking: Sentences or paragraphs are ranked based on their importance to the overall meaning of the text. Various algorithms, including statistical methods and machine learning models, are employed for this ranking.<br></br><br></br>
d. Summarization Generation: The final summary is generated by selecting the top-ranked sentences or content based on their importance. Abstractive summarization techniques may involve rewriting content to create a more concise and coherent summary.<br></br><br></br>
e. Evaluation: The generated summary is evaluated for coherence, relevance, and informativeness. Metrics such as ROUGE (Recall-Oriented Understudy for Gusting Evaluation) are commonly used for assessing the quality of the summarization.<br></br><br></br>
</p>
<h2>Results:</h2>
<p>a. Conciseness: Text summarization produces concise summaries that capture the essential information, making it easier for users to quickly understand the main points of a document.<br></br><br></br>
b. Time Savings: By condensing lengthy documents into summaries, text summarization saves time for users who would otherwise need to read through extensive content to extract relevant details.<br></br><br></br>
c. Decision Support: Summarized content aids decision-making by providing quick access to key information, enabling more informed and efficient choices.<br></br><br></br>
d. Multilingual Applications: Text summarization can be applied to facilitate the translation of content between languages by providing condensed versions for efficient processing.<br></br><br></br>
e. NLP Integration: Summarized text is well-suited for integration into various NLP applications, enhancing the efficiency of natural language processing tasks.<br></br><br></br>
</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default text
