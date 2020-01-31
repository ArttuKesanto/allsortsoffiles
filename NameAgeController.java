package hh.swd.hellothyme20.hellothymeleafagename.webcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import hh.swd.hellothyme20.hellothymeleafagename.domain.PersonInformation;

@Controller

public class NameAgeController {

@RequestMapping(value="/hello", method = RequestMethod.GET) // Tästä aloitetaan. Palauttaa lomakkeen welcomemessage.
public String printSomething(@RequestParam(name = "name")String personName, @RequestParam(value = "age")Integer personAge, Model model) {
		model.addAttribute("information", new PersonInformation(personAge, personName));
		return "welcomemessage"; // newcarform.html, palauttaa tämän.
		
	};
}
