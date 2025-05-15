import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lessonData from './Data/Lesson.json';
import './Style/LessonPage.css';

export default function LessonPage() {
    const { level, day } = useParams();
    const navigate = useNavigate();

    const lessonList = lessonData[level];
    const lesson = lessonList.find((l) => String(l.Day) === day);

    if (!lesson) {
        return <div>Lesson not found!</div>;
    }

    return (
        <div className="lesson-page">
            <header className="lesson-header">
                <button className="back-button" onClick={() => navigate(-1)}>←</button>
                <h2>🐤 Day {lesson.Day} – {lesson.Topic}</h2>
                <button className="close-button">닫기</button>
            </header>

            <section className="lesson-section tutor-box">
                <p><strong>Hi, User!</strong><br />
                    Today, we’re going to learn how to {lesson.Topic.toLowerCase()} in Korean.
                </p>
                <p>Let’s start with a simple sentence!</p>

                <div className="korean-sentence">
                    👉 <strong>{lesson.ExampleSentence}</strong>
                </div>
                <p>
                    <span className="romanization">Annyeonghaseyo. Jeoneun eumak deutneun geo joahaeyo.</span><br />
                    💬 Meaning: Hello. I like listening to music.
                </p>
                <p>Try saying it out loud with me!<br />Ready? Let’s go</p>
            </section>

            <section className="lesson-section user-box">
                <div className="user-bubble">안녕하세요. 조는 음악 듣는 거 좋아해요. 😊</div>
            </section>

            <section className="lesson-section tutor-box">
                <p>Almost there! 👍<br />
                    It sounded like you said "조는" instead of "저는".<br />
                    Try softening the ‘ㅓ’ sound — it should sound like “juh”, not “jo”.</p>

                <p>🧠 <strong>Tip:</strong><br />
                    Korean “ㅓ” = uh (like in “sun”)<br />
                    Korean “ㅗ” = oh (like in “go”)</p>

                <p>✅ <strong>Model pronunciation:</strong><br />
                    Jeoneun eumak deutneun geo joahaeyo.<br />
                    🗣️ Let’s say it together again:<br />
                    “저는 음악 듣는 거 좋아해요.”</p>
            </section>

            <div className="input-area">
                <input type="text" placeholder="Speak to your AI tutor!" />
                <button>🎙️</button>
            </div>
        </div>
    );
}
