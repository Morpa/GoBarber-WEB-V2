import React from 'react';
import { FiPower, FiClock } from 'react-icons/fi';

import * as S from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <S.Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </S.Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </S.HeaderContent>
      </S.Header>

      <S.Content>
        <S.Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <S.NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/15898709?s=60&v=4"
                alt="André"
              />
              <strong>André Morpa</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </S.NextAppointment>
        </S.Schedule>

        <S.Calendar />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
