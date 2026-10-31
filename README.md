# Web site virtual assistant

# About
A responsive web-based virtual assistant built with React. It  
provides an interactive chat interface for sending messages  
and receiving AI-generated responses, with conversation data  
stored for the current browser session.

# Components
- **Frontend**: React — chat interface and user interaction.  
- **Workflow automation**: n8n — message workflow automation  
and integration with the AI assistant.

# AI Agent configuration
Configure the AI agent according to the web application's  
niche and user needs:

- **AI model**: choose a model suited to the expected tasks,  
response quality, latency, and cost.
- **Knowledge bases**: provide relevant, reliable information  
about the application domain, products, and services.
- **Tools**: enable only the integrations and actions the  
agent needs to assist users.
- **System message**: define the agent's role, scope, tone,  
constraints, and how it should use its knowledge and tools.

# Development setup
- **Docker**: run n8n in a containerized environment.
- **ngrok**: expose a local HTTP endpoint through a tunnel so  
n8n can send requests to the development environment.
- **Mocked API**: simulate the remaining backend endpoints  
and actions that the AI agent can perform.