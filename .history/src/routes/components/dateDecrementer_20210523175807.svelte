<script>
  import { todaysDate, initialDate, currentImgDate } from '../stores';

	function decrementDate() {
        let tempDate = subDays(new Date(currentImgDate), 0);
		currentImgDate.update(format(new Date(tempDate), 'yyyy-MM-dd'));
        console.log(tempDate, currentImgDate);
	}
</script>

<button on:click={decrementDate}>
	-
</button>