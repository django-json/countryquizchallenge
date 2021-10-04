export const setWithExpiry = (key, value, ttl) => {
	const now = new Date();

	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	};
	localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
	const itemStr = localStorage.getItem(key);
	//if item doesn't exist, return null
	if (!itemStr) {
		return null;
	}

	const item = JSON.parse(itemStr);
	const now = new Date();
	//compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
};

const getRandomNumber = (length) => {
	const random = Math.floor(Math.random() * length);
	if (random <= length - 3 && random !== undefined) {
		return random;
	} else {
		getRandomNumber(length);
	}
};

// Fisher-Yates shuffle algorithm
const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const transformData = (data, category) => {
	//Transform data for the UI
	const shuffledData = shuffle(data);
	const slicedData = shuffledData.slice(0, 5);

	return slicedData.map((country, index) => {
		const randomNumber = getRandomNumber(data.length);

		const otherOptions = shuffledData
			.slice(randomNumber, randomNumber + 3)
			.map((country) => country.name.common); //Get other 3 random options
		const options = shuffle([...otherOptions, country.name.common]);

		return category === "capital"
			? {
					id: index,
					question: `${country.capital[0]} is the capital of?`,
					options,
					answer: country.name.common,
			  }
			: {
					id: index,
					question: `Which country does this flag belong to?`,
					options,
					answer: country.name.common,
					flag_link: country.flags.svg,
			  };
	});
};
