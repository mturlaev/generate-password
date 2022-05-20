    function generatePassword(length, string) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let newPassword = '';
        const digits = '0123456789';
        const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
        for(let i = 0; i < length; i++) {
        if (string === 'eazy'){
            const eazy = alphabet[Math.floor(Math.random() * alphabet.length)]
            newPassword += eazy
            } else if (string === 'medium'){
            const eazyMedium = alphabet + digits
            const medium = eazyMedium[Math.floor(Math.random() * eazyMedium.length)]
                newPassword += medium
        } else if (string === 'hard'){
            const eazyMediumHard = alphabet + digits + symbols   
            const hard = eazyMediumHard[Math.floor(Math.random() * eazyMediumHard.length)]
                newPassword += hard
        }
        }
    
        return newPassword;
    }