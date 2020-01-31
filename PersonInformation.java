package hh.swd.hellothyme20.hellothymeleafagename.domain;

public class PersonInformation {
	private Integer age;
	private String name;
	
	public PersonInformation(Integer age, String name) {
		super();
		this.age = age;
		this.name = name;
	}
	
	public PersonInformation() {
		super();
		this.age = null;
		this.name = null;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "PersonInformation [age=" + age + ", name=" + name + "]";
	}
	
	
	
	
	
	
}
