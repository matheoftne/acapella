<script>
export default {
    data() {
        return {
            faqItems: [
                {
                    q: "What is ChatGPT?",
                    a: "ChatGPT is a language generation model developed by OpenAI. It's based on the GPT (Generative Pre-trained Transformer) architecture and is designed to generate human-like text and engage in natural-sounding conversations."
                },
                {
                    q: "How does ChatGPT work?",
                    a:
                        "ChatGPT uses a deep learning architecture called GPT, which processes input text and generates coherent and contextually relevant responses. It's trained on a vast amount of internet text to learn grammar, context, and style to generate responses that mimic human conversation."
                },
                {
                    q: "What can I use ChatGPT for?",
                    a:
                        "ChatGPT can be used for a variety of purposes, including drafting emails, brainstorming ideas, writing code, generating creative content, providing tutoring or information on a wide range of topics, and engaging in simulated conversations."
                },
                // add more if required
            ]
        };
    }
}
</script>

<template>

</template>

<style scoped>
::selection {
	user-select: none;
}

/* style the FAQ section */
.question {
	background: hsl(35 10% 30% / 0.1);
	text-transform: uppercase;
	cursor: pointer;
	font-weight: bold;
	box-shadow: 0px 4px 0px 0 #88888855;
	padding: 10px 0;
	transition: transform 0.2s;
	position: relative;
}

.question:hover {
	background: hsl(35 10% 30% / 0.15);
}

.question::before {
	content: "✅";
	margin: 10px;
}

/* styles when the question is clicked */
.question:active {
	transform: translateY(4px);
	box-shadow: none;
}


.answer {
	overflow: hidden;
	line-height: 1.5;
}

.answer::before {
	content: "👉";
	margin-right: 10px;
}

/* style the toggleIcon */
.toggleIcon {
	font-size: 1.5em;
	font-weight: bold;
	position: absolute;
	right: 20px;
	display: inline-block;
	line-height: 0.5;
	color: #666;
}
</style>