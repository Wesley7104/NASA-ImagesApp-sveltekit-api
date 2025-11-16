<script>
  import { format, subDays } from 'date-fns';
  import { currentImgDate } from '../stores';

  function decrementDate() {
    const currentDate = $currentImgDate;
    const tempDate = subDays(new Date(currentDate), 1);
    const formattedDate = format(tempDate, 'yyyy-MM-dd');
    currentImgDate.set(formattedDate);
  }
</script>

<button class="btn btn-circle btn-outline" onclick={decrementDate}>
  -
</button>
