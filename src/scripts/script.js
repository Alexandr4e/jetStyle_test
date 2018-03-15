$(document).ready(function() {

	(function() {
		var $name = $('#first-name'),
			$lastName = $('#last-name'),
			$phone = $('#phone'),

			$list = $('#list'),
			$listItem = $('#list-item-for-clone'),
			$addButton = $('#add-button');


		//ADD CONTACT
		$addButton.click(function(){

			var $clone = $listItem.clone(),
				$itemIcon = $clone.find('.js-list-icon'),
				$itemName = $clone.find('.js-list-first-name'),
				$itemLastName = $clone.find('.js-list-last-name'),
				$itemPhone = $clone.find('.js-list-phone'),
				newName = $name.val(),
				newLastName = $lastName.val(),
				newPhone = $phone.val(),
				letterA = newName.charAt(0),
				letterB = newLastName.charAt(0);


			$('.js-input').removeClass('contacts__form-block-input_alert');

			if ($name.val() === '' || $lastName.val() === '' || $phone.val() === '' ) {

				if ($name.val() === '') {
					$name.addClass('contacts__form-block-input_alert');
				}

				if ($lastName.val() === '') {
					$lastName.addClass('contacts__form-block-input_alert');
				}

				if ($phone.val() === '') {
					$phone.addClass('contacts__form-block-input_alert');
				}

				return false;
			}

			$itemIcon.text(letterA + letterB);
			$itemName.text(newName);
			$itemLastName.text(newLastName);
			$itemPhone.text(newPhone).attr('href', "tel:" + newPhone + "");

			$clone.appendTo($list).show();
			$clone.removeAttr("id");
			$clone.css( "display", "flex" );

			$name.val('');
			$lastName.val('');
			$phone.val('');

			return false;

		});


		// DELETE
		$(document).on('click', '.js-delete', function() {
			var $t = $(this),
				$item = $t.closest('.js-list-item');

			$item.remove();
		});

	})();
});
