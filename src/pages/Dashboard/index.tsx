import React, { useState, useCallback } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { FiPower, FiClock } from 'react-icons/fi';

import 'react-day-picker/lib/style.css';
import * as S from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDayChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

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

          <S.Section>
            <strong>Manhã</strong>
            <S.Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/15898709?s=60&v=4"
                  alt="Andre"
                />
                <strong>ANdre</strong>
              </div>
            </S.Appointment>

            <S.Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/15898709?s=60&v=4"
                  alt="Andre"
                />
              </div>
            </S.Appointment>
          </S.Section>

          <S.Section>
            <strong>Tarde</strong>
            <S.Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/15898709?s=60&v=4"
                  alt="Andre"
                />
              </div>
            </S.Appointment>
            <S.Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/15898709?s=60&v=4"
                  alt="Andre"
                />
              </div>
            </S.Appointment>
          </S.Section>
        </S.Schedule>

        <S.Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDayChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </S.Calendar>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
