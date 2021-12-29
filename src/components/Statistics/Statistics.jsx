import PropTypes from 'prop-types';
import { Section, Title, StatList, StatItem } from './Statictics.styled';
import randomColor from '../../RandomColors';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <Section class="statistics">
      {title && <Title class="title">Upload stats</Title>}

      <StatList class="stat-list">
        {stats.map(stat => (
          <StatItem
            style={{ backgroundColor: randomColor() }}
            class="item"
            key={stat.id}
          >
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
