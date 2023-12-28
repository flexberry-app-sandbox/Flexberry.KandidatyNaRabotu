package Kandidaty_na_rabotu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kandidaty_na_rabotu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧРегРезульт
 */
@Entity(name = "IISKandidaty_na_rabotuТЧРегРезульт")
@Table(schema = "public", name = "ТЧРегРезульт")
public class TCHRegRezult {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИтогСобесед")
    private String итогсобесед;

    @Column(name = "ОценкаКандид")
    private Integer оценкакандид;

    @Column(name = "КрКомИлиОбсРеш")
    private String кркомилиобсреш;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegRezult")
    @Convert("RegRezult")
    @Column(name = "РегРезульт", length = 16, unique = true, nullable = false)
    private UUID _regrezultid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegRezult", insertable = false, updatable = false)
    private RegRezult regrezult;


    public TCHRegRezult() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИтогСобесед() {
      return итогсобесед;
    }

    public void setИтогСобесед(String итогсобесед) {
      this.итогсобесед = итогсобесед;
    }

    public Integer getОценкаКандид() {
      return оценкакандид;
    }

    public void setОценкаКандид(Integer оценкакандид) {
      this.оценкакандид = оценкакандид;
    }

    public String getКрКомИлиОбсРеш() {
      return кркомилиобсреш;
    }

    public void setКрКомИлиОбсРеш(String кркомилиобсреш) {
      this.кркомилиобсреш = кркомилиобсреш;
    }


}