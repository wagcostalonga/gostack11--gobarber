# Recuperação de senha

**Requisitos Funcionais**
- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um email com as instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais**
- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

**Regras de Negócios**
- O link enviado por email para resetar senha deve expeirar em 2 horas;
- O usuário precisa confirmar a nova senha;

# Atualização do perfil

**RF**
- O usuário deve poder atualizar seu perfil;

**RN**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, p usuário deve informar a senha antiga;
- Para atualiar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador no dia deve ser armazenado em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**
- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**
- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve durar até 1 hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h;
- O usuário não pode reservar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo próprio;

