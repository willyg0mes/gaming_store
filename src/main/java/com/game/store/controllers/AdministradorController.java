package com.game.store.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.game.store.models.Store;
import com.game.store.repository.StoreRepository;

import jakarta.transaction.Transactional;

@Controller
public class AdministradorController {

    @Autowired
    private StoreRepository gr;

    @RequestMapping("/administrador")
	public ModelAndView store() {
		ModelAndView mv = new ModelAndView("page/administrador");
		
		Iterable<Store> store = gr.findAll();
		mv.addObject("store", store);
		return mv;
	}

    @RequestMapping("/administrador/{codigoGame}/excluir")
    public String excluirJogo(@PathVariable long codigoGame) {
        Store store = gr.findByCodigoGame(codigoGame);
        gr.delete(store);
        return "redirect:/administrador";
    }

    @RequestMapping(value="/alterar/{codigoGame}", method=RequestMethod.GET)
   public ModelAndView formAlterar(@PathVariable("codigoGame") long codigoGame) {
	   Store store = gr.findByCodigoGame(codigoGame);
	   ModelAndView mv = new ModelAndView("page/editarjogo");
	   mv.addObject("store", store);
	   return mv;
   }
//    @RequestMapping(value="/alterar/{codigoGame}", method=RequestMethod.POST)
//    public String alterarJogo(@Validated Store store, BindingResult result, RedirectAttributes attributes) {
//    	System.out.print(store.getNomeImagem());
//    	//gr.save(store);
//    	return "redirect:/administrador";
//    }
     
}