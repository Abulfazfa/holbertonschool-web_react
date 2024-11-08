interface MajorCredits {
	credits: number;
	brand: 'brandA';
}

interface MinorCredits {
	credits: number;
	brand: 'brandB';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "brandA",
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "brandB",
    };
  }
  